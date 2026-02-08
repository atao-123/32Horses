<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8" :offset="0" v-for="(item, index) in data" :key="index">
        <el-card shadow="hover" class="border-0">
          <template #header>
            <div class="flex justify-between">
              <span class="text-sm">{{ item.title }}</span>
              <el-tag :type="item.unitColor" effect="plain">
                {{ item.unit }}
              </el-tag>

            </div>
          </template>
          <span class="text-3xl font-bold text-gray-500">
            <CountTo :value="item.value" />
          </span>
          <el-divider />
          <div class="flex justify-between text-sm text-gray-500">
            <span>{{ item.subTitle }}</span>
            <span>{{ item.subValue }}</span>
          </div>
        </el-card>

      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="24" :offset="0">
        <IndexChart />
      </el-col>
    </el-row>


  </div>
</template>

<script setup>
import { ref } from 'vue';
import CountTo from '~/pages/components/CountTo.vue';
import IndexChart from './components/IndexChart.vue';
const data = ref([
  {
    title: "数据1",
    value: 100,
    subTitle: "总数据1",
    subValue: 200,
    unit: "日",
    unitColor: "success"
  }, {
    title: "数据2",
    value: 500,
    subTitle: "总数据2",
    subValue: 1000,
    unit: "周",
    unitColor: "primary"
  }, {
    title: "数据3",
    value: 648,
    subTitle: "总数据3",
    subValue: 8848,
    unit: "月",
    unitColor: "warning"
  },
])
</script>