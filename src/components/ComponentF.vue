<template>
    <div>
        <h2>ComponenF</h2>
        <h2>{{ username }}</h2>
    </div>
</template>

<script>
export default {
    name: 'ComponentE',
    components: {
    },
    inject: ['username']
}
</script>

<style lang="scss" scoped></style>