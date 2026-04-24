import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import index from './router'
import './axios'
import { createPinia } from "pinia";
const pinia = createPinia();

createApp(App)
.use(pinia)
.use(index)
.mount('#app')
