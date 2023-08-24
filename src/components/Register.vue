
<template>
    <div class="flex justify-center items-center h-screen bg-indigo-500">
 <div class="w-96 p-6 shadow-lg bg-white rounded-md">
    <h1 class="text-3xl block font-semibold text-center">Register
      </h1>
      <hr class="mt-3">
        <div class="mt-3">
            <label for="username" class="block text-base mb-2">Username</label>
            <input v-model="form.name" type="text" id="username"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username...">
            <!-- <span v-if="errors.username" class="error">{{ errors.username }}</span> -->
        </div>
        <div class="mt-3">
            <label for="email" class="block text-base mb-2">Enter
                Email</label>
            <input v-model="form.email" type="text" id="email"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email...">
            <!-- <span v-if="errors.email" class="error">{{ errors.email }}</span> -->
        </div >



        <div class="mt-3">
            <label for="password" class="block text-base mb-2">Password</label>
            <input type="password" v-model="form.password" id="password"
            class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password...">
            <!-- <span v-if="errors.password" class="error">{{ errors.password }}</span> -->
        </div>
        <div class="mt-3">
                <button to class="border-2 border-indigo-700 bg-indigo-700 text-white px-4 py-2 rounded-md w-full" @click="resgisterUserfunc(form)">Submit</button>
        </div>
    </div>
    </div>
</template>

<script>
import router from '@/router';
import { mapActions } from 'vuex';
export default {
    name: 'Register',
    data() {
        return {
            form: {
                email: '',
                name: '',
                password: '',
            },
            // errors: {},
        };
    },
    methods: {
        ...mapActions({resgisterUser:"registerUser"}),
        resgisterUserfunc(obj){
            this.resgisterUser(obj)
            router.push("/")
        }
        // getForm(obj) {
        //     console.log(obj);
        // },
        // validateForm() {

        //     this.errors = {};


        //     if (!this.form.username) {
        //         this.errors.username = 'Username is required.';
        //     } else if (/\s/.test(this.form.username)) {
        //         this.errors.username = 'Username must not contain spaces.';
        //     } else if (!/[\d!@#$%^&*()_+~`.,;:'"<>{}/[\]\\]/.test(this.form.username)) {
        //         this.errors.username = 'Username must include a number or special character.';
        //     }


        //     if (!this.form.email) {
        //         this.errors.email = 'Email is required.';
        //     } else if (!this.isValidEmail(this.form.email)) {
        //         this.errors.email = 'Invalid email format.';
        //     }


        //     if (!this.form.password) {
        //         this.errors.password = 'Password is required.';
        //     } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(this.form.password)) {
        //         this.errors.password = 'Password must include a special character.';
        //     } else if (!/^[A-Z]/.test(this.form.password)) {
        //         this.errors.password = 'Password must start with a capital letter.';
        //     } else if (this.form.password.length !== 8) {
        //         this.errors.password = 'Password must be 8 digits long.';
        //     }


        //     if (this.form.password !== this.form.confirmPassword) {
        //         this.errors.confirmPassword = 'Passwords do not match.';
        //     }

        //     return Object.keys(this.errors).length === 0;
        // },
        // isValidEmail(email) {

        //     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     return emailPattern.test(email);
        // },
        // submitForm() {
        //     if (this.validateForm()) {

        //         localStorage.setItem('email', this.form.email),
        //         localStorage.setItem('password', this.form.password)
        //         console.log('Form is valid. Submitting...');
                
        //         this.$router.push('/');
        //     } else {

        //         console.log('Form is invalid. Please correct the errors.');
        //     }
        // },
    },
};
</script>

<style>.error {
    color: red;
}</style>
