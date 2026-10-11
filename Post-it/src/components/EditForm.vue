<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePostStore } from '@/store/post'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()
const store = usePostStore()
const { selectedPost, isLoading } = storeToRefs(store)

const id = route.params._id
const title = ref('')
const content = ref('')
const isSubmitting = ref(false)

const loadPost = async () => {
  await store.fetchPostById(id)
  if (selectedPost.value) {
    title.value = selectedPost.value.title ?? ''
    content.value = Array.isArray(selectedPost.value.content)
      ? (selectedPost.value.content[0] ?? '')
      : (selectedPost.value.content ?? '')
  }
}

const updatePost = async () => {
  try {
    isSubmitting.value = true
    await store.updatePosts(id, {
      title: title.value,
      content: [content.value],
    })
    router.push('/')
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error)
    alert("Une erreur est survenue lors de la modification.")
  } finally {
    isSubmitting.value = false
  }
}

onMounted(loadPost)
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 md:p-10 antialiased">
    <div class="w-full max-w-xl mx-auto space-y-6 animate-fade-in">
      <div class="flex justify-start">
        <router-link to="/" class="group inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-white rounded-xl shadow-sm hover:shadow border border-transparent hover:border-slate-100 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Annuler
        </router-link>
      </div>

      <div v-if="isLoading" class="bg-white rounded-2xl border border-slate-100 p-8 shadow-xl space-y-6 animate-pulse">
        <div class="h-4 bg-slate-200 rounded w-1/4"></div>
        <div class="h-12 bg-slate-200 rounded-lg w-full"></div>
        <div class="h-4 bg-slate-200 rounded w-1/4"></div>
        <div class="h-40 bg-slate-200 rounded-lg w-full"></div>
      </div>

      <form v-else @submit.prevent="updatePost" class="relative bg-white text-slate-700 p-8 sm:p-10 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50 text-left space-y-6 overflow-hidden">
        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

        <div>
          <h2 class="text-2xl font-bold text-slate-800 tracking-tight">Modifier la note</h2>
          <p class="text-sm text-slate-400 mt-1">Mettez à jour le titre ou le contenu de votre post-it.</p>
        </div>

        <div class="space-y-1.5">
          <label class="text-xs font-bold text-slate-500 uppercase tracking-wider" for="title">Titre</label>
          <input id="title" type="text" placeholder="Entrez le titre..." v-model="title" required
            class="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all duration-200 hover:border-slate-300">
        </div>

        <div class="space-y-1.5">
          <label class="text-xs font-bold text-slate-500 uppercase tracking-wider" for="content">Contenu</label>
          <textarea id="content" rows="8" placeholder="Écrivez vos idées ici..." v-model="content" required
            class="w-full resize-none px-4 py-3 border border-slate-200 rounded-xl text-slate-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-400 transition-all duration-200 hover:border-slate-300"></textarea>
        </div>

        <div class="flex items-center justify-end pt-2 border-t border-slate-50">
          <button type="submit" :disabled="isSubmitting"
            class="w-full sm:w-auto min-w-[140px] bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-indigo-500/10 hover:shadow-lg hover:shadow-indigo-500/20 active:scale-[0.98] disabled:opacity-50 transition-all duration-150 flex items-center justify-center space-x-2 cursor-pointer">
            <span v-if="isSubmitting">Mise à jour...</span>
            <span v-else>Enregistrer</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>