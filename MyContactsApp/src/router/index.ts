
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import AddContactView from '../views/AddContactView.vue'
import EditContactView from '../views/EditContactView.vue'
import ShowContactView from '../views/ShowContactView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import { authGuard } from '../_helpers/auth-guard'

const routes = [

     {
        path: '/',
        component: HomeView,
    },

    {
        path: '/dashboard',
        component: DashboardView,
        beforeEnter: authGuard
    },

    {
        path: '/login',
       component: LoginView
    },

    {
        path: '/register',
       component: RegisterView,
    },

    {
        path: '/contact/add',
       component: AddContactView,
    },

    {
        path: '/contact/edit/:id',
        name: 'edit',
        component: EditContactView,
        props:true,
    },

    {
        path: '/contact/show/:id',
       component: ShowContactView,
    },

     {
        path: '/:pathMatch(.*)*',
        component: PageNotFoundView,
    },
   
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


// router.beforeEach((to, _from, next) => {
//   const token = localStorage.getItem('token');
//   if (to.matched.some(route => route.meta.requiresAuth)) {
//     if (token) {
//       next();
//     } else {
//       next('/login');
//     }
//   } else {
//     next();
//   }
// });



export default router