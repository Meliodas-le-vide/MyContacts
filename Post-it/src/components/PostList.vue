<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { usePostStore } from '@/store/post'

const props = defineProps({
  searchTerm: { type: String, default: '' },
})

const store = usePostStore()
const { posts, isLoading, error } = storeToRefs(store)
const { fetchPosts, deletePosts } = store

const currentPage = ref(1)
const itemsPerPage = 8

const cardThemes = [
  { bar: 'from-indigo-400 to-purple-400', icon: 'text-indigo-600', bgIcon: 'bg-indigo-50', hover: 'group-hover:text-indigo-600' },
  { bar: 'from-emerald-400 to-teal-400', icon: 'text-emerald-600', bgIcon: 'bg-emerald-50', hover: 'group-hover:text-emerald-600' },
  { bar: 'from-rose-400 to-pink-400', icon: 'text-rose-600', bgIcon: 'bg-rose-50', hover: 'group-hover:text-rose-600' },
  { bar: 'from-amber-400 to-orange-400', icon: 'text-amber-600', bgIcon: 'bg-amber-50', hover: 'group-hover:text-amber-600' },
  { bar: 'from-sky-400 to-blue-400', icon: 'text-sky-600', bgIcon: 'bg-sky-50', hover: 'group-hover:text-sky-600' },
  { bar: 'from-violet-400 to-fuchsia-400', icon: 'text-violet-600', bgIcon: 'bg-violet-50', hover: 'group-hover:text-violet-600' },
]

const getTheme = (index) => cardThemes[index % cardThemes.length]

const filteredPosts = computed(() => {
  const term = props.searchTerm.trim().toLowerCase()
  if (!term) return posts.value

  return posts.value.filter((post) => {
    const title = post.title?.toLowerCase() ?? ''
    const content = Array.isArray(post.content)
      ? post.content.join(' ').toLowerCase()
      : (post.content ?? '').toLowerCase()
    return title.includes(term) || content.includes(term)
  })
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredPosts.value.slice(start, start + itemsPerPage)
})

watch(
  () => props.searchTerm,
  () => (currentPage.value = 1)
)

const handleDelete = async (_id) => {
  if (!confirm('Voulez-vous vraiment supprimer cette note ?')) return
  await deletePosts(_id)
  const totalPages = Math.ceil(filteredPosts.value.length / itemsPerPage)
  if (currentPage.value > totalPages && totalPages > 0) {
    currentPage.value = totalPages
  }
}

const displayContent = (content) => {
  if (Array.isArray(content)) return content[0] ?? ''
  return content ?? ''
}

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

onMounted(() => fetchPosts())
</script>

<template>
  <div class="w-full">
    <div v-if="isLoading" class="flex flex-col items-center justify-center py-20 gap-4">
      <div class="h-12 w-12 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
      <p class="text-sm text-slate-400 font-medium">Chargement...</p>
    </div>

    <div
      v-else-if="error"
      class="max-w-2xl mx-auto text-center py-16 px-6 rounded-2xl bg-rose-50 border border-rose-100"
    >
      <div class="text-4xl mb-3"></div>
      <p class="text-rose-600 font-medium">{{ error }}</p>
    </div>

    <div
      v-else-if="filteredPosts.length === 0"
      class="max-w-2xl mx-auto text-center py-16 px-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
    >
      <div class="text-5xl mb-4"></div>
      <h3 class="text-lg font-bold text-slate-700 mb-2">
        {{ props.searchTerm ? 'Aucun résultat' : 'Aucune note pour le moment' }}
      </h3>
      <p class="text-sm text-slate-400">
        {{ props.searchTerm
          ? 'Essayez un autre mot-clé.'
          : 'Créez votre première note pour commencer.' }}
      </p>
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10"
    >
      <article
        v-for="(post, index) in paginatedPosts"
        :key="post._id"
        class="group relative flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-slate-200 transition-all duration-300 ease-out overflow-hidden"
      >
        <div
          :class="['absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r', getTheme(index).bar]"
        />

        <div
          :class="[
            'pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl',
            getTheme(index).bgIcon,
          ]"
        />

        <div class="relative mt-2">
          <div class="flex items-start justify-between gap-2 mb-3">
            <h2
              :class="[
                'text-slate-800 text-lg font-bold tracking-tight line-clamp-1 transition-colors duration-200',
                getTheme(index).hover,
              ]"
            >
              {{ post.title }}
            </h2>
          </div>

          <p class="text-slate-500 text-sm leading-relaxed line-clamp-3">
            {{ displayContent(post.content) }}
          </p>
        </div>

        <div class="relative flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
          <span class="text-xs text-slate-400 font-medium">
            {{ formatDate(post.createdAt) }}
          </span>

          <div class="flex items-center gap-1">
            <RouterLink
              :to="`/detail/${post._id}`"
              class="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
              title="Voir les détails"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </RouterLink>

            <RouterLink
              :to="`/edit/${post._id}`"
              class="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200"
              title="Modifier"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </RouterLink>

            <button
              @click="handleDelete(post._id)"
              class="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all duration-200"
              title="Supprimer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </div>

    <div v-if="filteredPosts.length > itemsPerPage" class="flex justify-center mt-12 mb-6">
      <vue-awesome-paginate
        :total-items="filteredPosts.length"
        :items-per-page="itemsPerPage"
        :max-pages-shown="5"
        :show-ending-buttons="false"
        :show-breakpoint-button="false"
        v-model="currentPage"
      />
    </div>
  </div>
</template>

<style>
.pagination-container {
  display: flex;
  column-gap: 8px;
  background-color: white;
  padding: 6px 12px;
  border-radius: 9999px;
  box-shadow: 0 4px 12px -2px rgba(79, 70, 229, 0.15);
  border: 1px solid #e2e8f0;
}

.paginate-buttons {
  height: 38px;
  width: 38px;
  border-radius: 9999px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #64748b;
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.paginate-buttons:hover {
  background-color: #eef2ff;
  color: #4f46e5;
}

.active-page {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  color: white !important;
  box-shadow: 0 4px 10px -2px rgba(99, 102, 241, 0.5);
}

.active-page:hover {
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
}
</style>