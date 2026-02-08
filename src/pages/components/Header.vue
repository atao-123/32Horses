<template>
    <div class="header">
        <div class="ml-auto">
            <el-dropdown class="dropdown">
                <span class="flex items-center">
                    <el-avatar class="mr-2" :size="25" :src="defaultAvatar" />
                    admin
                    <el-icon class="el-icon--right">
                        <arrow-down />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handlelogout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup>
import defaultAvatar from '~/assets/default.png'
import { ref } from 'vue';
import { showModal } from '~/composables/util';
import { removeToken } from '~/composables/auth';
import { useRouter } from 'vue-router'
import { toast } from '~/composables/util';
import { useWebStore } from '~/stores';

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

<style>
.header{
    @apply flex text-light-50 right-0;
    height: 60px;
}

.dropdown {
    height: 64px;
    cursor: pointer;
    @apply flex justify-center items-center mx-5;
}
</style>