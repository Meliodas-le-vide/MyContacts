<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['search'])
const query = ref('')

let timeout = null
watch(query, (val) => {
  clearTimeout(timeout)
  timeout = setTimeout(() => emit('search', val), 300)
})
</script>

<template>
  <div class="relative w-full">
    <input
      v-model="query"
      type="text"
      placeholder="Rechercher un post..."
      class="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl text-slate-700 bg-white/80 backdrop-blur shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition-all duration-200 hover:border-slate-300 hover:shadow-md"
    />
    <div class="absolute inset-y-0 left-4 flex items-center pointer-events-none">
      <svg class="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  </div>
</template>