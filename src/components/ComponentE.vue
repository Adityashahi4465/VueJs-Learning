<template>
    <div>
        <h2>ComponenE</h2>
        <ComponentF />
    </div>
</template>

<script>
import ComponentF from './ComponentF.vue'
export default {
    name: 'ComponentE',
    components: {
        ComponentF,
    }
}
</script>

<style lang="scss" scoped></style>