<template>
        <div class="flex flex-col justify-center items-center mt-10 ">
             <div class="bg-white  text-left text-sm bg-white  max-w-105 ">
                <h2 class="text-2xl font-semibold mb-6 text-center text-gray-800">My Contacts</h2>
                <form @submit.prevent="register">
                    <input id="name" v-model="user.name" class="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-lg py-2.5 px-4" type="text" placeholder="Entrer votre nom">
                    <input id="email" v-model="user.email" class="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-lg py-2.5 px-4" type="email" placeholder="Entrer votre email">
                    <input id="password" v-model="user.password" class="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-lg py-2.5 px-4" type="password" placeholder="Entrer votre de mot de passe">
                    <input id="confirm_password" v-model="user.confirm_password" class="w-full bg-transparent my-3 border  border-gray-500/30 outline-none rounded-lg py-2.5 px-4" type="password" placeholder="Confirmer votre de mot de passe">
                    <button type="submit" class="w-full mb-3 bg-green-500 py-2.5 rounded-full text-white mt-2">Inscription</button>
                </form>
                <p class="text-center mt-4">Vous avez déja un compt? <router-link to="/login"><a class="text-green-500 underline">Connectez-vous</a></router-link></p>
                   <button type="button" class="w-full flex items-center gap-2 mt-4 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800">
                    <img class="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon">
                    Inscription avec Google
                </button>
            </div>
     </div>
</template>
<script>

    import axios from 'axios';
    import { accountService } from '../_services';
    export default {
        name: "Register",
        data() {
           return  {
             user: {
               name:'',
               email: '',
               password: '',
               confirm_password: ''
             }
           }
        },       
        methods: {
             async register(){   
                    accountService.register(this.user) 
                    .then(res => {
                        console.log(res.data)
                        this.$router.push('/login')
                    })
                    .catch(err => console.log(err))
                     
            }       
        }
    }   
</script>