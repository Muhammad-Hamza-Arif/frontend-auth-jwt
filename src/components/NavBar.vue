<template>
    <div class="flex justify-between bg-gray-400 p-10 h-14 items-center font-bold">
       <div>Website</div>
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