
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import EditView from '../views/EditView.vue'
import DetailView from '../views/DetailView.vue'




const routes = [
    {
        path: '/',
        component: HomeView
    },

     {
        path: '/create',
       component: CreateView
    },
     {
        path: '/edit/:_id',
       component: EditView,
       props:true,
    },
     {
        path: '/detail/:_id',
       component: DetailView,
       props:true,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

