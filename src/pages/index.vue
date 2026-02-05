<template>
    {{ webStore.user.logged }}
    {{ webStore.user.token }}
    {{ token }}
</template>

<script setup>
import { useWebStore } from '../stores/web';
const webStore = useWebStore()

import { useCookies } from '@vueuse/integrations/useCookies.js';
const cookie = useCookies()

const token = cookie.get("userToken")
</script>