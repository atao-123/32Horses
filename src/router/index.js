import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from '~/pages/index.vue'
import NotFound from '../pages/error/NotFound.vue'
import Login from '../pages/login.vue'
import InternalServerError from '../pages/error/InternalServerError.vue'
import Layout from '../layouts/index.vue'
import Search from '../pages/search.vue'
import Help from '../pages/help.vue'
import About from '../pages/about.vue'
const routes = [{
    path: '/',
    name: '/',
    component: Layout,
    // 子路由
    children: [{
        path: '/',
        name: 'index',
        component: Index,
        meta: {
            title: "首页"
        }
    }, {
        path: '/search',
        name: 'search',
        component: Search,
        meta: {
            title: "查询"
        }
    }, {
        path: '/help',
        name: 'help',
        component: Help,
        meta: {
            title: "帮助"
        }
    }, {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
            title: "关于"
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