import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import index from './router'
import { createPinia } from 'pinia'
import VueAwesomePaginate from "vue-awesome-paginate";

import "vue-awesome-paginate/dist/style.css";



createApp(App)
.use(VueAwesomePaginate)
.use(index)
.use(createPinia())
.mount('#app')
