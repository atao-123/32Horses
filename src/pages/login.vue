<script setup>
//导入响应式属性方法
import {
    ref,
    reactive
} from 'vue'

//导入路由控制
import { useRouter } from 'vue-router'
const router = useRouter()

//导入图标
import {
    User,
    Lock
} from '@element-plus/icons-vue'

//导入错误弹窗方法
import { ElNotification } from "element-plus";

//导入用户状态仓库
import { useWebStore } from '../stores/web';
const webStore = useWebStore()

//导入cookie操作方法
import { useCookies } from '@vueuse/integrations/useCookies.js';
const cookie = useCookies()


//声明表单内属性
const form = reactive({
    username: "",
    password: ""
})

//表单验证规则
const rules = {
    username: [
        {
            required: true,
            message: '用户名不能为空',
            trigger: 'blur'
        }
    ],
    password: [
        {
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
        }
    ]
}

//获取表单元素
const formRef = ref(null)

let tokenKey = "userToken"

//前端登录功能展示
const onSubmit = () => {
    formRef.value.validate((valid) => {
        //规则验证不通过
        if (!valid) {
            return false
        }
        console.log("验证通过");
        //用户密码正确
        if (form.username == "admin") {
            if (form.password == "admin") {
                //存储token
                cookie.set(tokenKey, "pass")
                ElNotification({
                    message: "登陆成功",
                    type: "success",
                    duration: 3000
                })
                router.push("/")
                return true
            }
        }
        ElNotification({
            message: "用户名或密码错误",
            type: "error",
            duration: 3000
        })
    })
}
</script>

<template>
    <el-row class="login-container">
        <el-col :lg="16" :md="12" class="left">
            <div>
                <div>异常流出卷烟32位码溯源系统</div>
                <div>引进提高异常流出卷烟32位码溯源到户率的应用与创新</div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="right">
            <h2 class="title">欢迎回来</h2>
            <div>
                <span class="line"></span>
                <span>账号密码登录</span>
                <span class="line"></span>
            </div>
            <el-form ref="formRef" :rules="rules" :model="form" class="w-[250px]">
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <User />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password>
                        <template #prefix>
                            <el-icon class="el-input__icon">
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#047857" class="w-[250px] " type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>


        </el-col>
    </el-row>
</template>

<style>
.login-container {
    @apply min-h-screen bg-green-700;
}

.login-container .left {
    @apply flex items-center justify-center;
}

.left>div>div:first-child {
    @apply font-bold text-5xl text-light-50 mb-4;
}

.left>div>div:last-child {
    @apply text-gray-200 text-sm;
}

.login-container .right {
    @apply bg-light-50 flex items-center justify-center flex-col;
}

.right .title {
    @apply font-bold text-3xl text-gray-800;
}

.right>div {
    @apply flex items-center justify-center my-5 text-gray-300 space-x-2;
}

.right .line {
    @apply h-[1px] w-16 bg-gray-200;
}
</style>