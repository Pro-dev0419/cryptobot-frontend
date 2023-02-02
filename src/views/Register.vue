<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h2 class="flex items-center mb-6 text-3xl font-semibold text-gray-900 text-white">
            Sign Up
        </h2>
        <span>One Admin ID is all you need to access all the Admin services.</span>
        <div class="w-full md:mt-0 sm:max-w-lg xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <p v-if="errors.length">
                    <ul>
                        <li v-for="error in errors" class="text-red-500">{{ error }}</li>
                    </ul>
                </p>
                <form class="space-y-4 md:space-y-6" action="#" @submit="handleSubmit">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 text-white">
                            Name <span class="text-red-500">*</span></label>
                        <input type="text" name="name" id="name" placeholder="e.g John Smith" v-model="name"
                            class="bg-opacity-25 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-white">
                            Email Address <span class="text-red-500">*</span></label>
                        <input type="email" name="email" id="email" placeholder="username@address.com" v-model="email"
                            class="bg-opacity-25 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-white">Password
                            <span class="text-red-500">*</span></label>
                        <input type="password" name="password" id="password" v-model="password"
                            class="bg-opacity-25 border border-gray-300 sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500">
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value=""
                                    class="w-4 h-4 bg-red-400 text-red-500 accent-green-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-gray-300 dark:bg-gray-700 dark:border-gray-600">
                            </div>
                            <div class="ml-3 text-sm">
                                <label for="remember" class="text-white dark:text-gray-300">
                                    I have read and agreee to the
                                    <a href="#" class="font-medium text-green-500 underline dark:text-green-500">Forgot
                                        password?</a>
                                    and
                                    <a href="#" class="font-medium text-green-500 underline dark:text-green-500">Privacy
                                        Policy</a>

                                </label>
                            </div>
                        </div>
                    </div>
                    <button type="submit"
                        class="w-full bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-lg">Sign
                        Up</button>
                    <p class="text-sm font-light text-primary-600 dark:text-gray-400 text-center">
                        Already have an Admin ID?
                        <router-link to="/login" class="font-medium text-green-500 underline dark:text-green-500">
                            Sign In
                        </router-link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
    name: "Register",
    props: {

    },
    emits: [],
    setup() {
        const errors: any = ref([]);
        const name = ref(null);
        const email = ref(null);
        const password = ref(null);
 
        const handleSubmit = (e: any) => {
            e.preventDefault();
            console.log(name.value, email.value, password.value);
            
            if (email.value && password.value && name.value) {
                axios.post("http://localhost:3003/api/auth/signup", {name: name.value, email: email.value, password: password.value})
                .then(response => {console.log(response)})
                .catch(error => {
                console.error("There was an error!", error);
                });
                return true;
            }

            errors.value = [];

            if (!name.value) {
                errors.value.push('Name required.');
            }
            if (!email.value) {
                errors.value.push('Email required.');
            }
            if (!password.value) {
                errors.value.push('Password required.');
            }
            
        }
        return {
            name,
            email,
            password,
            errors,
            handleSubmit
        }
    },
    components: {}
});
</script>

<style scoped>

</style>