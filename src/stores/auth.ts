import { defineStore } from 'pinia';
import { useRouter } from "vue-router";
import { fetchWrapper } from '@/shared/fetch-wrapper';
const baseUrl = 'http://localhost:3003/api';

import {router} from '@/router'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(username: any, password: any) {
            const user = await fetchWrapper.post(`${baseUrl}/auth/signin`, { email: username, password });

            // update pinia state
            this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            (await router).replace({path: '/'});
            return user;
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            const router = useRouter();
            router.push('/login');
        }
    }
});