<template>
   
    <div class="flex flex-wrap items-center justify-center gap-8 md:gap-10 mt-12 ">
         <router-link to="/dashboard">
              <button type="button" class="flex items-center gap-2.5 border border-gray-500/30 px-4 py-2 text-sm text-gray-800 rounded bg-white hover:text-green-500/70 hover:bg-green-500/10 hover:border-green-500/30 active:scale-95 transition">
                    Back
            </button>
        </router-link>
        
    </div>
      <div class="flex flex-wrap items-center justify-center gap-4 mt-12 ml-10">
        <div class="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300 w-lg ml-10">
            <img class="w-90 h-90 object-cover object-top mt-1 ml-12" src="../assets/u.png" alt="userImage2">
            <div class="flex flex-col items-center mr-12">
                <p class="font-medium text-xl mt-3">Nom: <a class="text-gray-500 text-sm">Kelvin John</a></p>
                 <p class="font-medium text-xl mt-3">Prenom: <a class="text-gray-500 text-sm">Kelvin John</a></p>
                    <p class="font-medium text-xl mt-3">Numero de telephone: <a class="text-gray-500 text-sm">+2250758974943</a></p>
                <p class="font-medium text-xl mt-3">Email: <a class="text-gray-500 text-sm">kelvin.john@gmail.com</a></p>
                <p class="font-medium text-xl mt-3">Genre: <a class="text-gray-500 text-sm">Homme</a></p>
                <p class="font-medium text-xl mt-3">date de naissance: <a class="text-gray-500 text-sm">12/12/2012</a></p>
                
            </div>
        </div>
    </div>
</template>

<script >

</script>
<style>

</style>