import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from '~/pages/index.vue'
import NotFound from '../pages/error/NotFound.vue'
import Login from '../pages/Login.vue'
import InternalServerError from '../pages/error/InternalServerError.vue'
import Layout from '../layouts/index.vue'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'

const routes = [{
    path: '/',
    component: Layout,
    // 子路由
    children: [{
        path: '/',
        component: Index,
        meta: {
            title: "首页"
        }
    }]
}, {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
        title: "登录"
    }
}, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
        title: "404"
    }
}, {
    path: '/500',
    component: InternalServerError,
    meta: {
        title: "500"
    }
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router