import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from '~/pages/index.vue'
import NotFound from '../pages/error/NotFound.vue'
import Login from '../pages/login.vue'
import InternalServerError from '../pages/error/internalServerError.vue'

const routes = [{
    path: '/',
    component: Index
}, {
    path: '/login',
    name: 'login',
    component: Login
}, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
}, {
    path: '/500',
    component: InternalServerError
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router