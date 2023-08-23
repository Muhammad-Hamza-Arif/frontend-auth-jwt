<template>
    <div>
    <li v-for="item in movies" :key="item">
        <p>item.name</p>

    </li>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    export default {
        name: 'AllMovies',
        computed:{
...mapGetters({movies:"getMovieList"})
        },
        created(){
            this.movies
        }
    }
</script>

<style lang="scss" scoped>

</style>