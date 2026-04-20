
<template>
     <div class="flex flex-col justify-center items-center mt-10">
             <div class="bg-white  text-left text-sm ">
                <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">My Contacts</h2>
                <form @submit.prevent="login">
                    <input id="email" v-model="email" class="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-lg py-2.5 px-4" type="email" placeholder="Entrer votre email">
                    <input id="password" v-model="password" class="w-full bg-transparent border mt-1 border-gray-500/30 outline-none rounded-lg py-2.5 px-4" type="password" placeholder="Entrer votre de mot de passe">
                    <div class="text-right py-4">
                        <a class="text-blue-500 underline" href="#">Mot de passe oubié?</a>
                    </div>
                    <button type="submit" class="w-full mb-3 bg-blue-500 py-2.5 rounded-full text-white">Connexion</button>
                </form>
                <p class="text-center mt-4">Vous n'avez pas de compt? <router-link to="/register"><a class="text-blue-500 underline">Inscrivez-vous</a></router-link></p>
                <button type="button" class="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white">
                    <img class="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png" alt="appleLogo">
                    Connexion avec Apple
                </button>
                <button type="button" class="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                    <img class="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon">
                    Connexion avec Google
                </button>
            </div>
     </div>
</template>
<script lang="ts">
   import axios from 'axios';
    export default {
        name: "Login",
        data() {
           return  {
               email: '',
               password: '',          
           }
        },       
        methods: {
           async login(){
             const response = await axios.post('https://api-contact.zoul.dev/api/users/login',{
                    email: this.email,
                    password: this.password,
             });
              console.log(response);
                
            }

            

        }
    }
</script>