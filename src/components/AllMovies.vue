<template>
  <div class="bg-indigo-500 h-screen px-10 py-10">
    <!-- Loop through the list of movies -->
    <div class="grid grid-cols-4 gap-4">
      <div
        v-for="(item, index) in movies"
        :key="index"
        class="bg-white rounded-md flex flex-col justify-around h-64 items-center"
      >
          <h2 class="text-3xl block font-semibold">{{ item.name }}</h2>
          <p class="text-gray-600">Released on {{ item.released_on }}</p>
          <p>id:{{ item.id }}</p>
        <div class="grid grid-cols-2 gap-8">
          <div>
            <button
              @click="editMovie(item.id)"
              class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Edit
            </button>
          </div>
          <div>
            <button
              @click="deleteMovie(index, item.id)"
              class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="px-4 py-2 border text-white text-center border-white mx-auto outline-2 rounded-md w-56 text-xl hover:bg-white hover:text-black font-medium mt-5">
       <router-link to="/usercreation" class="">
        <button>Back</button>
       </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AllMovies",
  data() {
    return {};
  },
  methods: {
    ...mapActions({ allMovies: "fetchMovies" }),
    ...mapActions({ delete: "deleteMovie" }),
    deleteMovie(index, id) {
      console.log("id to be del:  ", id);
      const obj = { index: index, id: id };
      this.delete(obj);
    },
    editMovie(index) {
      console.log(" in the parent edit movie ", index);
      this.$router.push({ path: `/edit/${index}` });
    },
  },
  computed: {
    ...mapGetters({ movies: "getMovieList" }),
  },
  created() {
    this.allMovies();
  },
  updated() {},
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
