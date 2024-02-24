<template>
    <div>
        <h2>Article : {{ title }}</h2>
        <h2>Likes : {{ likes }}</h2>
        <h2>Published : {{ isPublished }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: {
        title: {
            type: String,
            required: true,
            default: 'Default Title',
        },
        likes: Number,
        isPublished: Boolean,
    },
}
</script>

<style scoped></style>