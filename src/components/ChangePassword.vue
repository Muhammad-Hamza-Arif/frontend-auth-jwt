<template>
    <form action="" @submit.prevent="ChangePassword" class="max-w-sm mx-auto">
        <div class="mb-4">
                <label for="name" class="block text-gray-700 font-semibold">Change Password</label>
                <input v-model="password" type="password" id="name" name="name"
                    class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500">
            </div>
            <div>
                <button
              type="submit"
              class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Confirm Password
            </button>
            </div>
    </form>
</template>

<script>
import store from "@/store"
import { mapActions } from "vuex"
import router from '@/router'
    export default {
        name: 'ChangePassword',
        data() {
        return {
            password:null
        }
    },
    methods:{
        ...mapActions({ updatePassword: 'updatePassword' }),
        ChangePassword() {
            const obj = { 'id': store.state.userId, 'newPassword': this.password }
            console.log('obj as payload>>>>>>',obj)
            this.updatePassword(obj)
            router.push("/allmovies")
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>