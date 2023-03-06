import { createWebHistory, createRouter} from 'vue-router';
import mainPage from '@/views/main-page.vue';
import create from '@/views/create.vue';
import view from '@/views/view.vue';
import edit from '@/views/edit.vue';
import signIn from '@/views/sign-in.vue';
import signUp from '@/views/sign-up.vue';
import authenticate from '@/views/authenticate.vue';
import store from '@/store';

// const userAuthenticate = (to, from , next)=> {
//     const userInfo = store.state.user_profile   

//     const token = window.$cookies.get('token')  
//     if (!token) {
//         next({path: '/signin', query: {redirect: to.fullPath}})
//     } else if (!userInfo) {
//         next({path: '/authenticate', query: {redirect: to.fullPath}})
//     } else{
//         next()
//     }
// };


const privatePage = (to, from , next)=> {    
    const userProfile = store.state.user_profile       
    if(userProfile){
        next()
    }else{
        next({path: '/authenticate', query: {redirect: to.fullPath}})
    }
};



const routes = [
    {
        path: '/',
        name: 'main',
        component: mainPage,
        beforeEnter: privatePage
    },
    {
        path: '/create',
        name: 'create',
        component: create
    },
    {
        path: '/view/:post_id',
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
    },
    {
        path: '/authenticate',
        name: 'authenticate',
        component: authenticate
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