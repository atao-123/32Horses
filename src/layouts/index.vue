<template>
    <el-container>
        <!-- <el-header>
            <Header></Header>
        </el-header>
        <el-container>
            <el-aside>侧边</el-aside>
            <el-main>
                标签导航
                <router-view></router-view>
            </el-main>
        </el-container> -->
        <el-aside class="bg-green-700 justify-center items-center" width="230px">
            <el-header>
                <Logo></Logo>
            </el-header>
            侧边栏
        </el-aside>
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import Header from '../components/Header.vue';
import Logo from '../components/Logo.vue';
</script>