<template>
        <h2>hamza</h2>
    <div v-for="item in card" :key="item">
       <h2>{{ item}}</h2>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
    export default {
        name: 'UserFunctinality',
        // methods:{
        //     ...mapActions({ allMovies: "fetchMovies" }),
        // },
        computed:{
           ...mapGetters({card:"getUserCard"})
        },
        // created(){
        //     this.allMovies()
        // }
    }
</script>

<style lang="scss" scoped>

</style>