<template>
    <p>heyy</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        <!-- Loop through the list of movies -->
        <div v-for="(movie,index) in movies" :key="index" class="bg-white shadow-md rounded-md overflow-hidden">
            <div class="p-4">
                <h2 class="text-xl font-semibold">{{ movie.name }}</h2>
                <p class="text-gray-600">Released on {{ movie.released_on }}</p>
                <p> id:{{ movie.id }}</p>
            </div>
            <button class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" >Edit</button>
            <button class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600" >Del</button>
        </div>
    </div>
</template>

<script>
import { mapActions,mapGetters } from 'vuex';
export default {
    name: 'AllMovies',
    data() {
        return {
        }
    },
    methods: {
        ...mapActions({ allMovies: 'fetchMovies' }),
    },
    computed: {
        ...mapGetters({ movies: 'getMovieList' }),
        
    },
    created() {
        this.allMovies()
    },
    updated() {
        
    }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>