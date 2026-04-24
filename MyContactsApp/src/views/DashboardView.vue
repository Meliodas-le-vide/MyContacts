<template>
     <div class="bg-gray-50 ">
                <!-- Header -->
                <header class="w-full bg-white shadow-sm">
                    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
                    <!-- Logo -->
                    <div class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-green-500 rounded-full"></div>
                    </div>      
                      <div class="flex items-center space-x-4">
                           <button class="text-gray-700 hover:text-green-500">Acceuil</button>
                           <button  class="text-gray-700 hover:text-green-500">Contact</button>
                      </div>
                     <div class="flex items-center border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden max-w-md w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 30 30" fill="#6B7280">
                            <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
                        </svg>
                        <input type="text" placeholder="recherher un contact" class="w-full h-full outline-none text-gray-500 placeholder-gray-500 text-sm">
                    </div>

                    <!-- Right Buttons -->
                    <div class="flex items-center space-x-4">
                             <router-link to="">
                               <a  class="text-gray-700 hover:text-gray-900">Hi,</a>
                                 
                             </router-link>
                             <router-link to="">
                               <div class="flex flex-wrap justify-center">
                                    <button class="px-2 py-1  text-black rounded-lg font-medium hover:text-green-600 transition" @click="Logout()">Logout</button>
                                    <!-- <button class="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-sm text-center self-center px-4 py-2 m-2">Button</button>
                                    <button class="bg-indigo-500 rounded-tl-full rounded-br-full text-white text-md text-center self-center px-4 py-2 m-2">Button</button> -->
                                </div>
                             </router-link>
                               <router-link to="/contact/add">
                                  <a
                                    class="px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition"
                                    >
                                    créer
                                </a>
                             </router-link>      
                    </div>
                    </div>
                </header>        
      </div> 
       <div class="grid grid-cols-1 sm:justify-content-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-5 ">

             <div class="flex  items-center justify-center gap-8 mt-8 "v-for="contact in contacts" :key="contact.id">
                  <div class="bg-white rounded-2xl pb-4 overflow-hidden border border-gray-200 hover:-translate-y-1 transition duration-300">
                <div class="w-64 flex justify-center pt-10">
                    <div class="w-28rounded-full overflow-hidden">
                        <img class="h-40 object-cover object-top ml-7" src="../assets/u.png" alt="userImage2">
                    </div>
                </div>
            <div class="flex flex-col items-center" >
                <p class="font-medium mt-3">Nom: <a class="">{{ contact.lastname }}</a></p>
                <p class="font-medium mt-3">Email: <a class="text-gray-500 text-sm"></a></p>{{ contact.email }}
                <p class="font-medium mt-3">Numero de telephone: <a class="text-gray-500 text-sm">{{ contact.phone }}</a></p>
                <p class="font-medium mt-3">Genre: <a class="text-gray-500 text-sm">{{ contact.gender }}</a></p>
            <div class="space-x-6 mt-5">
                <button class="hover:text-red-600 hover:bg-red-100 font-medium " aria-label="add" v-on:click="">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </button>
             <router-link to="/contact/show/:id">
            <button
                    class=" hover:text-blue-600  hover:bg-blue-100  font-medium  ">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </span>                
            </button>
             </router-link>    
              
              <!-- <router-link to="`/contact/edit/${_id}`">
                   
                </router-link> -->
                 <button class="hover:text-green-600  hover:bg-green-100 font-medium" @click=edit(contact._id)>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    </button>
            </div>
            </div>
        </div>
       </div> 
       </div>   
</template>
<script>
import { contactService } from '../_services/contact-service';
import { accountService} from '../_services';

    export default {
        name:'Dashboard',
        data(){
           return {
              contacts: []
           }
        },
        mounted() {
            contactService.getAllContacts()
            .then(res => {
                 console.log(res.data.data)
                 this.contacts = res.data.data
            })
            .catch(err => console.log(err))
        }, 
        
        methods: {
             Logout() {
                accountService.logout()
                this.$router.push('/login')
             },

             edit(_id){
                console.log(_id)
                this.$router.push({name:'edit',params:{id:_id}})
             }
        }
    }
</script>