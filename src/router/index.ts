import { routes } from "@/router/routes";
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from '@/stores';

export const setupRouter = async () => {
    // console.log( await Promise.all(routes));
    const router = createRouter({
        history: createWebHistory(),
        routes: await Promise.all(routes),
    });

    router.beforeEach(async (to) => {
        // redirect to login page if not logged in and trying to access a restricted page
        const publicPages = ['/login'];
        const authRequired = !publicPages.includes(to.path);
        const auth = useAuthStore();

        if (authRequired && !auth.user) {
            auth.returnUrl = to.fullPath;
            return '/login';
        }
    });

    router.afterEach(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });

    return router;
};

export const router = setupRouter();
