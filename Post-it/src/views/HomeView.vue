<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import PostList from '../components/PostList.vue'
import PostSearch from '../components/PostSearch.vue'

const searchQuery = ref('')
const handleSearch = (query) => {
  searchQuery.value = query
}
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 selection:bg-indigo-500 selection:text-white antialiased">
    <div class="pointer-events-none fixed top-0 -left-40 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl" />
    <div class="pointer-events-none fixed bottom-0 -right-40 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div class="max-w-3xl mx-auto text-center mb-12 space-y-6">
        <div class="space-y-3">
     

          <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Mon Tableau de
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
              Post-it
            </span>
          </h1>

          <p class="text-sm sm:text-base text-slate-500 max-w-md mx-auto">
            Recherchez, créez et organisez vos idées instantanément sur une interface épurée.
          </p>
        </div>

        <div class="w-full max-w-xl mx-auto">
          <PostSearch @search="handleSearch" />
        </div>

        <div class="flex justify-center pt-2">
          <RouterLink
            to="/create"
            class="group inline-flex items-center gap-2 bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-[0.98] transition-all duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-5 h-5 transition-transform duration-200 group-hover:rotate-90">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span>Nouveau Post-it</span>
          </RouterLink>
        </div>
      </div>

      <div class="border-t border-slate-200/60 my-8 max-w-7xl mx-auto" />

      <section class="mt-8 animate-fade-in">
        <PostList :search-term="searchQuery" />
      </section>
    </div>
  </main>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>