<template>
  <div class="min-h-screen bg-slate-50 p-6 md:p-10">
    <header class="mb-8 max-w-7xl mx-auto flex justify-between items-center border-b border-slate-200 pb-5">
      <div>
        <h1 class="text-3xl font-bold text-slate-800 tracking-tight">Mon Post-It Board</h1>
        <p class="text-sm text-slate-500 mt-1">Gérez vos notes et tâches en temps réel</p>
      </div>
      <div class="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold shadow-sm border border-indigo-100">
        {{ posts.length }} {{ posts.length > 1 ? 'Notes' : 'Note' }}
      </div>
    </header>

    <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
      <div 
        v-for="post in paginatedPosts" 
        :key="post.id" 
        class="group relative flex flex-col justify-between p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out"
      >
        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-t-2xl"></div>
        
        <div class="mt-2">
          <h2 class="text-slate-800 text-lg font-bold tracking-tight line-clamp-1 group-hover:text-indigo-600 transition-colors duration-200">
            {{ post.title }}
          </h2>
          <p class="text-slate-500 text-sm leading-relaxed mt-3 line-clamp-3">
            {{ post.content[0] }}
          </p>
        </div>

        <div class="flex items-center justify-end space-x-2 mt-6 pt-4 border-t border-slate-50">
          
          <router-link :to="`/detail/${post._id}`" class="focus:outline-none">
            <button class="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all duration-200" title="Voir les détails">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </router-link>    
          
          <router-link :to="`/edit/${post._id}`" class="focus:outline-none">
            <button class="p-2 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all duration-200" title="Modifier">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </button>
          </router-link>

          <button @click="deletePosts(post._id)" class="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all duration-200" title="Supprimer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>

        </div>
      </div>    
    </div>

    <div class="flex justify-center mt-12 mb-6">
      <vue-awesome-paginate 
        :total-items="posts.length"
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
  /* Style de pagination ultra-pro et épuré */
  .pagination-container {
    display: flex;
    column-gap: 8px;
    background-color: white;
    padding: 6px 12px;
    border-radius: 9999px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    border: 1px solid #f1f5f9;
  }

  .paginate-buttons {
    height: 36px;
    width: 36px;
    border-radius: 9999px;
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: #64748b;
    font-weight: 500;
    font-size: 0.875rem;
    transition: all 0.2s ease;
  }

  .paginate-buttons:hover {
    background-color: #f1f5f9;
    color: #1e293b;
  }

  .active-page {
    background-color: #4f46e5;
    color: white !important;
  }

  .active-page:hover {
    background-color: #4338ca;
  }
</style>

<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

const posts = ref([]);
const currentPage = ref(1);
const itemsPerPage = 8; // Changé à 8 pour faire des lignes parfaites de 4 cartes sur grand écran

const paginatedPosts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return posts.value.slice(start, end);
});
 
const fetchPosts = async () => {
     try {
         const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/notes`);
         posts.value = res.data.notes;
     } catch (error) {
         console.error("Erreur lors de la récupération des notes :", error);
     }
}

const deletePosts = async (_id) => {
     if(confirm("Voulez-vous vraiment supprimer cette note ?")) { // Ajout d'une sécurité UX de base
         try {
             await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/notes/${_id}`);
             fetchPosts();
         } catch (error) {
             console.error("Erreur lors de la suppression :", error);
         }
     }
}

onMounted(fetchPosts);
</script>