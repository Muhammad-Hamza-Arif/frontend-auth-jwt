<template>
    <div class="flex justify-center items-center h-screen bg-indigo-500">
    <form action="" @submit.prevent="ChangePassword" class="max-w-sm mx-auto">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 class="text-3xl block font-semibold text-center">
                Create New Password
      </h1>
      <hr class="mt-3">
      <div class="mt-3">
                <label for="password" class="block text-base mb-2">Password</label>
                <input v-model="password" type="password" id="password"
                class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          placeholder="Enter New Password...">
            </div>
            <div class="mt-3">
                <button
                class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md w-full">Submit</button>
            </div>
            </div>
    </form>
</div>
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
            router.push("/usercreation")
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>