<template>
    <div>
        <h3 v-if="error">{{ error }}</h3>

        <form @submit.prevent="createPost">
            <div>
                <label for="userId">User Id</label>
                <input v-model="formData.userId" type="text" />
            </div>
            <div>
                <label for="title">Title </label>
                <input v-model="formData.title" type="text" />
            </div>
            <div>
                <label for="body">Body</label>
                <input v-model="formData.body" type="text" />
            </div>
            <button>Create Posts</button>
        </form>


    </div>
</template>

<script>
import axios from 'axios'


export default {
    name: 'CreatePost',
    data() {
        return {
            formData: {
                userId: '',
                title: '',
                body: '',
            },
            error: ''
        }

    },
    methods: {
        createPost() {
            axios.post('https://jsonplaceholder.typicode.com/posts', this.formData)
                .then((respose) => {
                    console.log(respose)
                }).catch((e) => {
                    console.log(e);
                    this.error = e;
                });
        }

    }
}
</script>

<style lang="scss" scoped></style>