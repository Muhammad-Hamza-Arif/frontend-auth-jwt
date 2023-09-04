<template>
  <div class="flex justify-center items-center h-screen bg-indigo-500">
    <form
      class="w-96 p-6 shadow-lg bg-white rounded-md"
      @submit.prevent="updateMovieInStore"
    >
      <h2 class="text-3xl block font-semibold text-center">Update Movie</h2>
      <hr class="mt-3" />
      <div class="mt-3">
        <label for="name" class="block text-base mb-2">Name</label>
        <input
          v-model="editedMovie.name"
          type="text"
          id="name"
          name="name"
          class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          placeholder="Enter Movie Name..."
        />
      </div>
      <div class="mt-3">
        <label for="date" class="block text-base mb-2">Released On</label>
        <input
          v-model="editedMovie.released_on"
          type="date"
          id="date"
          name="released_on"
          class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
        />
      </div>
      <div class="mt-3">
        <button
          type="submit"
          class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md w-full"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
export default {
  name: "EditMovie",
  data() {
    return {
      editedMovie: {
        name: "",
        released_on: "",
      },
      id: this.$route.params.id, // Initialize id as null
    };
  },
  methods: {
    ...mapActions(["updateMovies"]),
    async updateMovieInStore() {
      console.log("route params ", this.$route.params.id);
      console.log("in the edit movie ---->", this.id, this.editedMovie);
      await this.updateMovies({ indx: this.id, updateMovie: this.editedMovie });
      router.push("/allmovies");
    },
  },
};
</script>
