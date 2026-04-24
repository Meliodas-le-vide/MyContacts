// import { defineStore } from "pinia";

// export const useUserStore = defineStore("user", {
//   state: () => ({
//     user: '',
//     userInfo: '',
//   }),

//   actions: {
//     async register(name: any,email: any, password: any,confirm_password: any) {
//       const res = await fetch("https://api-contact.zoul.dev/api/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name,email,password,confirm_password }),
//       });
//       const user = await res.json()
//       this.user = user;

//     },


//     async login(email: any, password: any) {
//       const res = await fetch("https://api-contact.zoul.dev/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });
//       const user = await res.json();
//       this.user = user
//       localStorage.setItem('token',JSON.stringify(user.token));
      
//     },

//     async logout(){
//         localStorage.removeItem("user");

//     }

//   },
// });