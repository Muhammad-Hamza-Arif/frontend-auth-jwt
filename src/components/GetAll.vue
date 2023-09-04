<template>
  <div>
    <button class="bg-blue-300 p-2 rounded-md" @click="getAll">
      All Users
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "GetAll",
  methods: {
    ...mapActions({ getAll: "getAll" }),
  },
};
</script>

<style lang="scss" scoped></style>
