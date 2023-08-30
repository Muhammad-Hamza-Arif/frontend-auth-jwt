<template>
  <div class="flex justify-center items-center h-screen bg-indigo-500">
    <div class="w-96 p-6 shadow-lg bg-white rounded-md">
      <h1 class="text-3xl block font-semibold text-center">
        <i class="fa-solid fa-user"></i> Login
      </h1>
      <hr class="mt-3" />
      <div class="mt-3">
        <label for="email" class="block text-base mb-2">Email</label>
        <input
          v-model="form.email"
          type="text"
          id="email"
          class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          placeholder="Enter Email..."
        />
      </div>

      <div class="mt-3">
        <label for="password" class="block text-base mb-2">Password</label>
        <input
          type="password"
          v-model="form.password"
          id="password"
          class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
          placeholder="Enter Password..."
        />
      </div>
      <!-- <div class="mt-3 flex justify-between items-center">
        <div>
          <input type="checkbox" />
          <label for="">Remember Me</label>
        </div>
        <div>
          <a href="" class="text-indigo-800 font-semibold">Forgot Password?</a>
        </div>
      </div> -->
      <div class="mt-5 flex justify-between">
        <button
          class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md"
          @click="userAuthenticationFunc(form)"
        >
          Log in
        </button>
        <router-link to="/register">
          <button
            class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md"
          >
            Sign Up
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import { mapActions,mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions({ userAuthentication: "userAuthentication" }),
    userAuthenticationFunc(obj){
      this.userAuthentication(obj)
      if(this.getToken && this.getRole == "user"){
        router.push("/userPanel")
      }
      if(this.getToken && this.getRole == "admin"){
        router.push("/allmovies")
      }
    }
  },
  computed:{
...mapGetters({getRole:"getRole",getToken:"getToken"})
  }
};
</script>

<style>
.error {
  color: red;
}
</style>
