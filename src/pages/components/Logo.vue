<template>
    <div class="logo">
        <!-- <span class="logoImg">&#128052;</span> -->
        <span class="logoImg"><el-icon>
                <DeleteFilled />
            </el-icon></span>

        <span class="logoTitle">午德马码呀！</span>
    </div>

</template>

<script setup>
import { DeleteFilled } from '@element-plus/icons-vue';
</script>

<style>
.logo {
    @apply flex items-center justify-start fixed top-0 left-0 right-0;
    height: 60px;
    width: 180px;
}

.logoImg {
    @apply text-xl mr-2 ml-3 mt-3;
}

.logoTitle {
    @apply text-base;
    height: 20px;
}
</style>