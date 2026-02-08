<template>
  <Logo></Logo>
  <div class="menu">
    <el-menu :default-active="defaultActive" class="border-0" @select="handleSelect">
      <template v-for="(item, index) in menus" :key="index">
        <el-menu-item :index="item.path">
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { House, Search, Tickets, Files } from '@element-plus/icons-vue'
import Logo from './Logo.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

const router = useRouter()

// 路由关联菜单高亮
const route = useRoute()
const defaultActive = ref(route.path)


const menus = [{
  "name": "首页",
  "icon": House,
  "path": "/"
}, {
  "name": "查询",
  "icon": Search,
  "path": "/search"
}, {
  "name": "帮助",
  "icon": Tickets,
  "path": "/help"
}, {
  "name": "关于",
  "icon": Files,
  "path": "/about"
}]

// 点击跳转路由事件
const handleSelect = (e) => {
  router.push(e)
}
</script>

<style>
.menu {
  width: 180px;
  top: 60px;
  bottom: 0;
  overflow: auto;
  @apply shadow-md fixed bg-light-50;
}
</style>