import { createWebHistory, createRouter} from 'vue-router';
import mainPage from '../views/main-page.vue';
import create from '../views/create.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: mainPage
    },
    {
        path: '/create',
        name: 'create',
        component: create
    }
];

const router = createRouter({
	history : createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
          return { top: 0 }
        }
    },
});

export default router;