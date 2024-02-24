<template>
    <div>
        <!-- Options API -->
        <input v-model="fName" placeholder="First Name" type="text" />
        <input v-model="lName" placeholder="Last Name" type="text" />


        <input v-model="lName" placeholder="Hero Name Name" type="text" />
        <input v-model="fName" placeholder="First Name" type="text" />
        <input v-model="lName" placeholder="Last Name" type="text" />
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
    name: "VModel",
    // V model using composition api
    setup() {
        const heroName = ref('');
        const state = reactive({
            fistName: '',
            lastName: '',
        });

        return {
            heroName,
            ...toRefs(state)
        }
    },
    data() {
        return {
            fName: '',
            lName: '',
        }
    },
}
</script>

<style lang="sass" scoped>

</style>