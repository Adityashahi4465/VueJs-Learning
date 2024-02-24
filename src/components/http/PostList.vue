<template>
    <div>
        <!-- <button @click="getPosts">Load Posts</button> -->
        <h3 v-if="error">{{ error }}</h3>
        <div v-for="post in posts" :key="post.id">
            <h3> {{ post.id }}. {{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr>
        </div>

    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'PostList',
    created() {
        this.getPosts();
    },
    data() {
        return {
            posts: [],
            error: ''
        }

    },

    methods: {
        getPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts/')
                .then((respose) => {
                    console.log(respose.data)
                    this.posts = respose.data
                }).catch((e) => {
                    console.log(e);
                    this.error = e;
                });
        }

    }
}
</script>

<style lang="scss" scoped></style>