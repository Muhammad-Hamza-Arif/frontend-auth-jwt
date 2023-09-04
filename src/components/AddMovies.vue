<template>
    <!-- <NavBar/> -->
    <div class="flex justify-center items-center h-screen bg-indigo-500">
        <form class="w-96 p-6 shadow-lg bg-white rounded-md" @submit.prevent="addMovie">
            <h2 class="text-3xl block font-semibold text-center">Create Movie</h2>
            <hr class="mt-3">
            <div class="mt-3">
                <label for="name" class="block text-base mb-2">Name</label>
                <input v-model="formData.name" type="text" id="name" name="name"
                class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          placeholder="Enter Movie Name...">
            </div>
            <div class="mt-3">
                <label for="date" class="block text-base mb-2">Released On</label>
                <input v-model="formData.released_on" type="date" id="date" name="released_on"
                class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600">
            </div>
            <div class="mt-3">
                <button type="submit"
                class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md w-full">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import router from '@/router';
import { mapActions } from 'vuex';
import NavBar from './NavBar.vue';
export default {
    name:'AddMovies',
    components:{
        NavBar
    },
    data() {
        return {
            formData: {
                name: '',
                released_on: ''
            }
        };
    },
    methods: {
        ...mapActions({add:'createMovies'}),
        addMovie() {
            this.add(this.formData)
            console.log('Movie data:', this.formData);
            router.push('/usercreation')
        }
    }
};
</script>

<style scoped>/* Add any component-specific styles here */</style>