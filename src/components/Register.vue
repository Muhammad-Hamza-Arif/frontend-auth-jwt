
<template>
    <div class="grid justify-items-center px-32 py-8  shadow-lg">

        <div class="mb-4">
            <label for="Enter Character ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter
                Username</label>
            <input v-model="form.name" type="text" id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <!-- <span v-if="errors.username" class="error">{{ errors.username }}</span> -->
        </div>
        <div class="mb-4">
            <label for="Enter Character ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter
                Email</label>
            <input v-model="form.email" type="text" id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <!-- <span v-if="errors.email" class="error">{{ errors.email }}</span> -->
        </div >



        <div class="mb-4">
            <label for="Enter Character ID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter
                Password</label>
            <input type="password" v-model="form.password" id="default-input"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <!-- <span v-if="errors.password" class="error">{{ errors.password }}</span> -->
        </div>
        <button class="bg-blue-300 p-2 rounded-md" @click="resgisterUser(form)">Sign Up</button>
        <router-link to="/authenticate">
            <button class="bg-blue-300 p-2 rounded-md">Login</button>
        </router-link>

        <div class="mt-5">
            
        </div>
    </div>
</template>

<script>
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
