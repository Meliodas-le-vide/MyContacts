<script setup>
import { ref } from 'vue';
import PostList from '../components/PostList.vue';
import PostSearch from '../components/PostSearch.vue';

// Petite astuce de pro : on prépare une variable pour stocker la recherche 
// si tu as besoin de lier PostSearch et PostList plus tard !
const searchQuery = ref('');

const handleSearch = (query) => {
  searchQuery.value = query;
};
</script>

<template>
  <main class="min-h-screen bg-slate-50/50 selection:bg-indigo-500 selection:text-white antialiased">
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      
      <div class="max-w-3xl mx-auto text-center mb-12 space-y-6">
        <div class="space-y-2">
          <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
            Mon Tableau de <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Post-it</span>
          </h1>
          <p class="text-base text-slate-500 max-w-md mx-auto">
            Recherchez, créez et organisez vos idées instantanément sur une interface épurée.
          </p>
        </div>

        <div class="w-full max-w-xl mx-auto transition-all duration-300 transform hover:scale-[1.01]">
          <PostSearch @search="handleSearch" />
        </div>
      </div>

      <div class="border-t border-slate-200/60 my-8 max-w-7xl mx-auto"></div>

      <section class="mt-8 animate-fade-in">
        <PostList :search-term="searchQuery" />
      </section>

    </div>
  </main>
</template>

<style scoped>
/* Petite animation fluide à l'ouverture de la page pour épater le recruteur */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>