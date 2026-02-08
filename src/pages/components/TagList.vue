<template>
    <div class="f-tag-list">
        <el-tabs v-model="activeTab" type="card" class="demo-tabs" @tab-remove="removeTab" @tab-change="changeTab">
            <el-tab-pane :closable="item.path != '/'" v-for="item in tabList" :key="item.path" :label="item.title"
                :name="item.path">
            </el-tab-pane>
        </el-tabs>
    </div>

</template>

<script setup>
import { ref } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'

const route = useRoute()
const router = useRouter()
const cookie = useCookies()

const activeTab = ref(route.path)
const tabList = ref([
    {
        title: '首页',
        path: "/"
    }
])

onBeforeRouteUpdate((to, from) => {
    console.log(to);
    activeTab.value = to.path
    addTab({
        title: to.meta.title,
        path: to.path
    })
})

// 添加标签导航
function addTab(tab) {
    let noTab = tabList.value.findIndex(t => t.path == tab.path) == -1
    if (noTab) {
        tabList.value.push(tab)
    }

    cookie.set("tabList", tabList.value)
}

// 初始化标签列表
function initTabList() {
    let tbs = cookie.get("tabList")
    if (tbs) {
        tabList.value = tbs
    }
}

initTabList()

// 点击切换视图
const changeTab = (t) => {
    activeTab.value = t
    console.log(t);

    router.push(t)
}

// 标签关闭方法
const removeTab = (t) => {
    let tabs = tabList.value
    let a = activeTab.value
    if (a == t) {
        tabs.forEach((tab, index) => {
            if (tab.path == t) {
                const nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                    a = nextTab.path
                }
            }
        })
    }

    activeTab.value = a
    tabList.value = tabList.value.filter(tab => tab.path != t)
    cookie.set("tabList", tabList.value)
    router.push(a)
}
</script>

<style>
.f-tag-list {
    @apply flex items-center;
    top: 60;
    right: 0;
    height: 44px;
    left: 180px;
    z-index: 100;
}


.el-tabs--card>.el-tabs__header {
    @apply mb-0;
}

.el-tabs--card>.el-tabs__header .el-tabs__nav {
    border: 0 !important;
}

.el-tabs--card>.el-tabs__header .el-tabs__item {
    border: 0 !important;
}
</style>