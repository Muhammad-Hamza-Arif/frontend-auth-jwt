<template>
  <div class="bg-indigo-500 h-screen px-10 py-10">
    <div class="grid grid-cols-4 gap-4">
  <div v-for="item in users" :key="item.id" class="bg-white rounded-md flex flex-col justify-around h-64 items-center">
    <h2 class="text-3xl block font-semibold">Name: {{ item.name }}</h2>
    <p class="text-gray-600">Email: {{ item.email }}</p>
    <p class="text-gray-600">Role: {{ item.role }}</p>
    <button @click="chnageRole(item.id)" class="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Change Role</button>
    <!-- <p>id: {{ item.id }}</p> -->
  </div>
</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AdminPanel",
  methods: {
    ...mapActions({ allusers: "allUsers" }),
    chnageRole(id) {
      this.$router.push({ path: `/editRole/${id}` });
    },
  },
  mounted() {
    this.allusers();
  },
  computed: {
    ...mapGetters({ users: "getAllUsers" }),
  },
};
</script>

<style lang="scss" scoped></style>
