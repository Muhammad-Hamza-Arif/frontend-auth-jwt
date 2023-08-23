<template>
    <div class="min-h-screen flex items-center justify-center">
        <form class="bg-white p-8 shadow-md rounded-md" @submit.prevent="updateMovieInStore">
            <h2 class="text-2xl mb-4">Add a Movie</h2>
            <div class="mb-4">
                <label for="name" class="block text-gray-700 font-semibold">Name</label>
                <input v-model="editedMovie.name" type="text" id="name" name="name"
                    class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500">
            </div>
            <div class="mb-4">
                <label for="released_on" class="block text-gray-700 font-semibold">Released On</label>
                <input v-model="editedMovie.released_on" type="date" id="released_on" name="released_on"
                    class="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500">
            </div>
            <div>
                <button type="submit"
                    class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Update Movie</button>
            </div>
        </form>
    </div>
</template>

<script>
import router from "@/router";
import { mapActions } from 'vuex';
export default{
    name: 'EditMovie',
    data() {
    return {
      editedMovie: {
        name: "",
        released_on: "",
      },
      id: this.$route.params.id, // Initialize id as null
    }
  },
  methods: {
    ...mapActions(["updateMovies"]),
    updateMovieInStore() {
      console.log("route params ", this.$route.params.id);
      console.log("in the edit movie ---->", this.id, this.editedMovie);
      this.updateMovies({ indx: this.id, updateMovie: this.editedMovie });
      router.push("/allmovies");
    },
  },
}</script>