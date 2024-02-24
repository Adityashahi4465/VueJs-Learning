
<template>
    <h2>{{ name }} fan of {{ hero }}</h2>
</template>

<script>
export default {
    name: 'Greet',
    props: ['name', 'hero']
}
</script>

<style></style>