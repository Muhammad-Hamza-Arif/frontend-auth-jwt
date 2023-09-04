<template>
  <div
    class="flex justify-between p-10 h-14 items-center text-2xl font-serif font-medium bg-indigo-500 text-white"
  >
    <div>
      <router-link to="/">Movies</router-link>
    </div>
    <div>
      <button @click="changePassword(id)" class="mr-12">Change Password</button>
      <router-link to="">
        <button>Cart</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "NavBar",
  data() {
    return {
      id: store.state.userId,
    };
  },
  methods: {
    changePassword(id) {
      this.$router.push({ path: `/editPassword/${this.id}` });
    },
  },
};
</script>
<style lang="scss" scoped></style>
