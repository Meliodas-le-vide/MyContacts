<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 md:p-10 antialiased">
    
    <div class="w-full max-w-3xl mx-auto space-y-6">
      
      <div class="flex justify-start">
        <router-link to="/" class="group inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-white rounded-xl shadow-sm hover:shadow border border-transparent hover:border-slate-100 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Retour au tableau
        </router-link>
      </div>

      <div v-if="!post" class="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm space-y-4 animate-pulse">
        <div class="h-8 bg-slate-200 rounded-lg w-1/3"></div>
        <div class="space-y-2">
          <div class="h-4 bg-slate-200 rounded w-full"></div>
          <div class="h-4 bg-slate-200 rounded w-5/6"></div>
          <div class="h-4 bg-slate-200 rounded w-2/3"></div>
        </div>
      </div>

      <article v-else class="relative bg-white rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-300">
        
        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        
        <div class="p-8 sm:p-10 space-y-6">
          <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight break-words leading-tight pt-2">
            {{ post.title }}
          </h1>
          
          <div class="flex items-center text-xs font-medium text-slate-400 space-x-2">
            <span class="bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md font-semibold">Note</span>
            <span>•</span>
            <span>ID: {{ routeParamsId.substring(0, 8) }}...</span>
          </div>

          <div class="border-t border-slate-100"></div>

          <p class="text-base sm:text-lg text-slate-600 leading-relaxed whitespace-pre-line break-words">
            {{ post.content && post.content[0] ? post.content[0] : 'Aucun contenu dans cette note.' }}
          </p>
        </div>

      </article>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const post = ref(null);
const routeParamsId = ref(route.params._id);

const fetchPost = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/notes/${routeParamsId.value}`);
    // Adapter selon la structure de ton API si elle renvoie directement l'objet ou s'il est enveloppé
    post.value = res.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du post-it :", error);
  }
};

onMounted(fetchPost);
</script>

<style scoped>
/* Conserve l'alignement propre sur les longs textes */
.break-words {
  word-break: break-word;
}
</style>