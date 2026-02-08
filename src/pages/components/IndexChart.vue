<template>
    <el-card shadow="never" class="mt-2 border-0">
        <template #header>
            <div class="flex justify-between">
                <span>{{ "数据统计" }}</span>
                <div>
                    <el-check-tag v-for="(item, index) in options" :key="index" :checked="current == item.value"
                        style="margin-right:  8px;" @click="handleChoose(item.value)">
                        {{ item.text }}
                    </el-check-tag>
                </div>
            </div>
        </template>

        <div id="chart" style="width: 100%;height: 400px;"></div>
    </el-card>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts'

const current = ref('w')
const options = [{
    text: "日",
    value: "d"
}, {
    text: "周",
    value: "w"
}, {
    text: "月",
    value: "m"
}]

function handleChoose(tag) {
    current.value = tag
    console.log("123");

    setOptions(tag)
}

// 图标属性
let option

// setOptions('w')

var myChart = null
onMounted(() => {
    var chartDom = document.getElementById('chart')
    myChart = echarts.init(chartDom)

    option = {
        xAxis: {
            type: 'category',
            data: []
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180,180,180,0.2)'
                }
            }
        ]
    }

    setOptions('w')

    option && myChart.setOption(option)
})

// 设置图标属性
function setOptions(tag) {
    switch (tag) {
        case 'd':
            option.xAxis.data = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
            option.series[0].data = [20, 87, 45, 56, 24, 48, 62, 12, 35, 68, 78, 45, 21]
            break;
        case 'w':
            option.xAxis.data = [1, 2, 3, 4, 5, 6, 7]
            option.series[0].data = [125, 223, 132, 152, 136, 154, 132]
            break;
        case 'm':
            option.xAxis.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
            option.series[0].data = [234, 245, 365, 234, 546, 235, 442, 365, 135, 452, 365, 236, 665, 234, 782, 368, 468, 354, 368, 483, 135, 465, 365, 423, 654, 364, 854, 236, 954, 222]
            break;
    }
    myChart.setOption(option)
    console.log(option.xAxis.data);


}

</script>