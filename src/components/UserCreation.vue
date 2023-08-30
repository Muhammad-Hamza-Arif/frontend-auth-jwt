<template>
  <div class="bg-indigo-500">
    <NavBar />
    <p class="text-white font-serif text-center text-2xl mt-12">
      The user can create movies and then see all the movies he his created
    </p>
    <div class="flex justify-center h-[87vh]">
      <div class="w-96 p-6 shadow-lg bg-white rounded-md h-64 mt-5">
        <div>
          <router-link to="/addmovies">
            <button
              class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md w-full"
            >
              Create Movies
            </button>
          </router-link>
        </div>
        <div class="mt-3">
          <router-link to="allmovies">
            <button
              class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md w-full"
            >
              See All Movies
            </button>
          </router-link>
        </div>
        <div class="mt-3">
          <router-link to="/adminpanel">
            <button
              class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md w-full"
            >
              Admin Panel
            </button>
          </router-link>
        </div>
        <div class="mt-3">
          <router-link to="/userpanel">
            <button
              class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md w-full"
            >
              User Panel
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <router-link to="/userfunctionality">
    <button>hellp</button>
  </router-link>
</template>

<script>
import NavBar from "./NavBar.vue";
export default {
  name: "UserCreation",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped></style>
