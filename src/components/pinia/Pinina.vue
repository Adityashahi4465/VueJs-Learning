<template>
    <div>
        <div>Countr : {{ counter.count }}</div>
        <button @click="counter.increment()">Increament</button>
    </div>
</template>

<script setup>
name: "Pinina"
import { userCounterStore } from '../../stores/counter.js'
const counter = userCounterStore();

</script>

<style lang="scss" scoped></style>