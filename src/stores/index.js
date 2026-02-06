import { defineStore } from "pinia";
import { reactive } from "vue";

export const useWebStore = defineStore('web', () => {
    const user = reactive({
        logged: false,
    })

    return {
        user
    }
}, {
    persist: true
})