<template>
    <div class="flex justify-center items-center h-screen bg-indigo-500">
    <form action="" @submit.prevent="changeRole" class="max-w-sm mx-auto">
        <div class="w-96 p-6 shadow-lg bg-white rounded-md">
            <h1 class="text-3xl block font-semibold text-center">
                Create New Role
      </h1>
      <hr class="mt-3">
      <div class="mt-3">
                <label for="role" class="block text-base mb-2">Password</label>
                <input v-model="role" type="role" id="role"
                class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          placeholder="Enter New Role...">
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
import router from '@/router';
import { mapActions } from 'vuex';
    export default {
        name: 'EditRole',
        data(){
            return{
                role:null,
                id: this.$route.params.id
            }
        },
        methods:{
            ...mapActions(["updateRole"]),
    async changeRole() {
      console.log("route params ", this.$route.params.id);
      console.log("in the edit movie ---->",this.role);
      const obj = { indx: this.id, updateRole: this.role }
      await this.updateRole(obj);
      router.push('/adminpanel')
    },
        }
    }
</script>

<style lang="scss" scoped>

</style>