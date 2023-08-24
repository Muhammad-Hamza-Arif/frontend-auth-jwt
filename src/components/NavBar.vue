<template>
    <div class="flex justify-between p-10 h-14 items-center text-2xl font-serif font-medium bg-indigo-500 text-white">
       <router-link to="/">Movies</router-link>
        <button @click="changePassword(id)">Change Password</button>
    </div>
</template>

<script>
import store from "@/store"
    export default {
        name:"NavBar",
        data(){
            return{
                id:store.state.userId,
            }
        },
        methods:{
            changePassword(id){
                this.$router.push({path: `/editPassword/${this.id}`})
            }
        }
    }
</script>
<style lang="scss" scoped>

</style>