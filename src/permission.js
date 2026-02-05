//本文件处理权限验证相关任务

//路由权限验证
import router from "./router";
import { useCookies } from "@vueuse/integrations/useCookies.js";

const cookie = useCookies()

router.beforeEach((to, from, next) => {

    const token = cookie.get("userToken")
    console.log(token);

    //未登录，跳转到登录页
    if (token == "" && to.path != "/login") {
        console.log("未登录");
        return next({ path: "/login" })
    }

    //已登录，不可跳转到登录页
    if (token != "" && to.path == "/login") {
        console.log("不可重复登陆");
        return next({ path: from.path ? from.path : '/' })
    }
    next()
})