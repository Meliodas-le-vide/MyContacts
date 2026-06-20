import { defineStore } from "pinia";
import  {ref,computed} from 'vue'

import axios from "axios";


export const usePostStore = defineStore('post',{
    state: () => ({
        posts: ref([]),
        selectedPost: ref([]),
        // currentPage = ref(1),
        // itemPergePage = 5,
    }),

    actions: {

        //  paginatePosts = computed(()  =>  {
        //      const start = (currentPage.value -1) * itemPergePage;
        //      const end = start + itemPergePage
        //      return this.posts.value.slice(start,end);
        // }),

          async fetchPosts () {
             const res = await axios.get('https://postit.zoul.dev/notes')
             this.posts = res.data.notes
         },

          async addPosts (payload) {
             await axios.post('https://postit.zoul.dev/notes',payload)
             this.fetchPosts()
         },
          async deletePosts (_id){
             await axios.delete(`https://postit.zoul.dev/notes/${_id}`)
             this.fetchPosts()
         },
          async fetchPostById(_id) {
              const res = await axios.get(`https://postit.zoul.dev/notes/${_id}`)
              this.selectedPost = res.data.notes
         },
          async updatePosts(_id, updateData) {
             await axios.put(`https://postit.zoul.dev/notes/${_id}`,updateData)
             this.fetchPosts()
        },
        
       

    }
})