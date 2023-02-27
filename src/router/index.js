import { createWebHistory, createRouter} from 'vue-router';
import mainPage from '../views/main-page.vue';
import create from '../views/create.vue';
import view from '../views/view.vue';
import edit from '../views/edit.vue';
import signIn from '../views/sign-in.vue';
import signUp from '../views/sign-up.vue';

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
    },
    {
        path: '/view',
        name: 'view',
        component: view
    },
    {
        path: '/edit',
        name: 'edit',
        component: edit
    },
    {
        path: '/sign-in',
        name: 'sign-in',
        component: signIn
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: signUp
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