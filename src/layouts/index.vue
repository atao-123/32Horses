<template>
    <el-container style="height: 100%;">
        <el-aside style="width: 180px;">
            <Menu></Menu>
        </el-aside>
        <el-container>
            <el-header style="padding: 0;">
                <Header></Header>
            </el-header>
            <el-main style="padding: 0;">
                <TagList></TagList>
                <router-view v-slot="{ Component }" class="bg-gray-100" style="height: 100%;padding: 20px;">
                    <Transition name="fade">
                        <keep-alive :max="5">
                            <component :is="Component"></component>
                        </keep-alive>
                    </Transition>
                </router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup>
import Header from '~/pages/components/Header.vue';
import Menu from '~/pages/components/Menu.vue';
import TagList from '../pages/components/TagList.vue';
import { Transition } from 'vue';

</script>

<style>
.fade-enter-from {
    opacity: 0;
}

.fade.enter-to {
    opacity: 1;
}

.fade-leave-from {
    opacity: 1;
}

.fade-leave-to {
    opacity: 0;
}

.fade-leave-active {
    transition: all 0.3s;
}

.fade-enter-active {
    transition-delay: 0.5s;
}
</style>