import { defineStore } from 'pinia'

export const userCounterStore = defineStore('counter', {
    state() {
        return {
            count: 0,
        }
    },
    actions: {
        increment() {
            this.count++;
        }
    }
})