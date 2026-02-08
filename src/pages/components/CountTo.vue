<!-- 数字滚动动画组件 -->

<template>
    {{ data.num.toFixed(0) }}
</template>

<script setup>
import { reactive, watch } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    value: {
        type: Number,
        default: 0
    }
})

const data = reactive({
    num: 0
})

function AnimateToValue() {
    gsap.to(data, {
        duration: 0.8,
        num: props.value
    })
}

AnimateToValue()

watch(() => props.value, () => AnimateToValue())
</script>