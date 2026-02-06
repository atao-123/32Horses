<template>
    <el-button type="primary" @click="handlelogout">Loading</el-button>
</template>

<script setup>
import { ref } from 'vue';
import { showModal } from '../composables/util';
import { removeToken } from '../composables/auth';
import { useRouter } from 'vue-router'
import { toast } from '../composables/util';
import { useWebStore } from '../stores';

const webStore = useWebStore()
const router = useRouter()
function handlelogout() {
    showModal("是否退出登录").then(res => {
        removeToken()
        webStore.user.logged = false
        router.push("/login")
        toast("已退出登录", "success")
    }).catch()
}
</script>