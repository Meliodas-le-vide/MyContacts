// import axios from "axios";

// export class ContactService {
//       static url = `https://api-contact.zoul.dev/api/`;

//       static getAllContact() {
//         let data = `${this.url}/contacts`;
//         return axios.get(data);
//       }

//        static getContact(_id: any) {
//         let data = `${this.url}/contacts/${_id}`;
//         return axios.get(data);
//       }

//       static createContact(contact: any){
//          let data = `${this.url}/contacts/`;
//          return axios.post(data,contact)
//       }

//        static updateContact(contact: any,_id: any){
//          let data = `${this.url}/contacts/${_id}`;
//          return axios.put(data,contact)
//       }

//        static deleteContact(_id: any){
//          let data = `${this.url}/contacts/${_id}`;
//          return axios.delete(data)
//       }
// }

// function ContactService() {
//      const Url = 'https://api-contact.zoul.dev/api';
//      const headers = {
//         'content-Type': 'application/json'
//      };

//      async function getContacts() {
//           let url = `${Url}/contacts? q=Zoul&page=1&perpage=10&order=desc&orderBy=desc`;
//           return await fetch(url).then((res)=> res.json())
//      }

//      async function createContacts(contact: any) {
//           return await fetch('https://api-contact.zoul.dev/api/contacts',{
//             method:'POST',
//             headers,
//             body: JSON.stringify(contact)
//           }).then((res)=> res.json())
//      }

//      async function deleteAllContacts() {
//          return await fetch(Url, {
//              method: 'DELETE',
//          }).then((res)=> res.json())
//      }

//         async function getContact(_id: any) {
//          return await fetch(`${Url}/contacts/${_id}`, {
//          }).then((res)=> res.json())
//      }

//       async function updateContacts(_id: any,contact: any) {
//          return await fetch(`${Url}/contact/${_id}`, {
//              method: 'PUT',
//              headers,
//             body: JSON.stringify(contact)
//          }).then((res)=> res.json())
//      }

//          async function deleteContacts(_id: any) {
//          return await fetch(`${Url}/contacts/${_id}`, {
//              method: 'DELETE',
//              headers,
//          }).then((res)=> res.json())
//      }

//      return {
//         getContact,
//         getContacts,
//         createContacts,
//         updateContacts,
//         deleteAllContacts,
//         deleteContacts
//      }
     
// }

// export default ContactService();



import { defineStore } from "pinia";
import  {ref} from 'vue'

import axios from "axios";


export const useContactStore = defineStore('post',{
    state: () => ({
        contact: ref([]),
        selectedContact: ref([]),     
    }),

    actions: {
        
          async getContacts() {
          let url = `${'https://api-contact.zoul.dev/api/'}/contacts? q=Zoul&page=1&perpage=10&order=desc&orderBy=desc`;
          const res = await axios.get(url)
          this.contact = res.data.data
        },

          async createContacts (contact: any) {
             await axios.post('https://api-contact.zoul.dev/api/contacts',contact)
             this.getContacts()
             
        },
          async deleteContacts (_id: any){
             await axios.delete(`https://postit.zoul.dev/notes/contacts/${_id}`)
             this.getContacts()
        },
          async getContactById(_id: any) {
              const res = await axios.get(`https://postit.zoul.dev/notes/contacts/${_id}`)
              this.selectedContact = res.data.data
        },
          async updatePosts(_id: any, contact: any) {
             await axios.put(`https://postit.zoul.dev/notes/${_id}`,contact)
             this.getContacts()
        },
        
       

    }
})



