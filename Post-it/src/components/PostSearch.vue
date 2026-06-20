<template>
  <div class="w-full">
  

    <div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div id="user-controls" class="p-6 bg-white rounded-xl border border-gray-100 shadow-lg shadow-black/5 space-y-4 md:flex md:items-center md:space-y-0 md:space-x-4">
        
        <div class="w-full md:w-auto">
          <p class="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 md:mb-0">Actions</p>
        </div>

        <div class="relative w-full">
          <input 
            type="text" 
            placeholder="Rechercher un post..." 
            class="w-full pl-5 pr-4 py-3.5 border border-gray-200 rounded-lg text-gray-700 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 transition duration-200 hover:border-gray-300 hover:shadow-md"
          >
          <div class="absolute inset-y-0 right-3.5 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div class="w-full md:w-auto flex-none">
          <router-link to="/create">
            <button class="w-full md:w-auto min-w-[120px] bg-gradient-to-br from-indigo-500 to-indigo-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-3.5 px-6 rounded-lg shadow-md shadow-indigo-500/10 hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] transition-all duration-150 inline-flex items-center justify-center space-x-2">
              <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>New</span>
            </button>
          </router-link>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
/* Scoped styles are generally preferred to keep components self-contained. 
   Consider putting any custom CSS here, or relying solely on Tailwind utility classes.
*/
</style>