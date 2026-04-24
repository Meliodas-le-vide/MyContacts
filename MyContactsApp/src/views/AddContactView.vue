<template>
     
<div class="bg-white px-6 py-12 sm:py-24 lg:px-8">
  <div class="mx-auto max-w-xl flex flex-col items-center justify-center text-center">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">My Contacts</h1>
    <p class="mt-3 text-lg text-gray-600">Enregister vos contact en tout securité</p>
  </div>
  <form class="mx-auto mt-16 max-w-xl sm:mt-20" @submit.prevent="addContact">
    <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label for="first-name" class="block text-sm font-semibold leading-6 text-gray-900">Prenom</label>
        <div class="mt-2.5">
          <input required="" v-model="contact.firstname" type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="Your First Name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div>
        <label for="last-name" class="block text-sm font-semibold leading-6 text-gray-900">Nom</label>
        <div class="mt-2.5">
          <input required="" v-model="contact.lastname" type="text" name="last-name" id="last-name" autocomplete="family-name" placeholder="Your Last Name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
        </div>
      </div>
       <div class="sm:col-span-2">
        <label for="phone" class="block text-sm font-semibold leading-6 text-gray-900">Numero de telephone</label>
        <div class="mt-2.5">
          <input required="" v-model="contact.phone" v type="tel" name="phone" id="phone" autocomplete="tel" placeholder="Your Phone Number" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6">
        </div>
      </div>
        <div class="sm:col-span-2">
        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div class="mt-2.5">
          <input required="" v-model="contact.email" type="email" name="email" id="email" autocomplete="email" placeholder="Entrer l'email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6">
        </div>
      </div>
       <div class="sm:col-span-2">
        <label for="gender" class="block text-sm font-semibold leading-6 text-gray-900">Genre</label>
        <div class="mt-2.5">
          <input required="" v-model="contact.gender" type="text" name="gender" id="gender" autocomplete="tel" placeholder="Genre" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6">
        </div>
      </div>
       <div class="sm:col-span-2">
        <label for="bithdate" class="block text-sm font-semibold leading-6 text-gray-900">Date de naissance</label>
        <div class="mt-2.5">
          <input required="" v-model="contact.birthdate" type="date" name="birthdate" id="birthdate" autocomplete="tel" placeholder="Age" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6">
        </div>
      </div>
      <div class="sm:col-span-2">
        <label for="position" class="block text-sm font-semibold leading-6 text-gray-900">Position</label>
        <div class="mt-2.5">
          <input required="" v-model="contact.position" type="text" name="position" id="position" autocomplete="organization" placeholder="Position" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
        </div>
      </div>
       <div class="sm:col-span-2">
        <label for="compagny" class="block text-sm font-semibold leading-6 text-gray-900">Compagny</label>
        <div class="mt-2.5">
          <input required="" v-model="contact.compagny" type="text" name="compagny" id="compagny" autocomplete="organization" placeholder="Entrer la Compagny" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6">
        </div>
      </div>
    </div>
    <div class="mt-10">
      <button type="submit" class="bg-green-600 text-white rounded-sm py-2 w-full block">Submit →</button>
    </div>
  </form>
</div>

</template>

<script>
import { contactService } from '../_services/contact-service';
export default {
    name: 'AddContact',
          data() {
           return  {
             contact: {
              firstname:'',
               lastname: '',
               phone:'',
               email: '',
               gender: '',
               birthdate: '',
               position: '',
               compagny:'',
               user_id: '69eb95fa0d3bf58ef5eefd09'
             }
           }
        }, 
          methods: {
              add() {
                console.log(this.contact)
                contactService.createContact(this.contact)
                // .then(res => console.log(res) this.$router.push('/dashboard'))
                .catch(err => console.log(err))
              }    
        }
}
</script>
<style>

</style>