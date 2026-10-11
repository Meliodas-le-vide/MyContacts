import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import EditView from '../views/EditView.vue'
import DetailView from '../views/DetailView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },

  { path: '/create', name: 'create', component: CreateView },

  { path: '/edit/:_id', name: 'edit', component: EditView, props: true },

  { path: '/detail/:_id', name: 'detail', component: DetailView, props: true },
  
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router