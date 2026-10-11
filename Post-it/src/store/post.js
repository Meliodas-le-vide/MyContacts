import { defineStore } from 'pinia'
import axios from 'axios'


const API_URL = '/api/notes'

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    selectedPost: null,
    isLoading: false,
    error: null,
  }),

  getters: {
    totalPosts: (state) => state.posts.length,
  },

  actions: {
    async fetchPosts() {
      this.isLoading = true
      this.error = null
      try {
        const res = await axios.get(API_URL)
        this.posts = res.data.notes ?? res.data ?? []
      } catch (err) {
        console.error('Erreur fetchPosts :', err)
        this.error = err.message
        this.posts = []
      } finally {
        this.isLoading = false
      }
    },

    async fetchPostById(_id) {
      this.isLoading = true
      this.error = null
      try {
        const res = await axios.get(`${API_URL}/${_id}`)
        this.selectedPost = res.data.note ?? res.data.notes ?? res.data
      } catch (err) {
        console.error('Erreur fetchPostById :', err)
        this.error = err.message
        this.selectedPost = null
      } finally {
        this.isLoading = false
      }
    },

    async addPosts(payload) {
      this.isLoading = true
      this.error = null
      try {
        await axios.post(API_URL, payload)
        await this.fetchPosts()
      } catch (err) {
        console.error('Erreur addPosts :', err)
        this.error = err.message
        throw err
      } finally {
        this.isLoading = false
      }
    },

    async updatePosts(_id, updateData) {
      this.isLoading = true
      this.error = null
      try {
        await axios.put(`${API_URL}/${_id}`, updateData)
        await this.fetchPosts()
      } catch (err) {
        console.error('Erreur updatePosts :', err)
        this.error = err.message
        throw err
      } finally {
        this.isLoading = false
      }
    },

    async deletePosts(_id) {
      try {
        await axios.delete(`${API_URL}/${_id}`)
        this.posts = this.posts.filter((p) => p._id !== _id)
      } catch (err) {
        console.error('Erreur deletePosts :', err)
        this.error = err.message
        throw err
      }
    },
  },
})