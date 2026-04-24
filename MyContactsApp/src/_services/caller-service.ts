import axios from "axios";
import { accountService } from "./account-service";
import router from "../router";

const Axios = axios.create({
     baseURL:'https://api-contact.zoul.dev/api/'
})

Axios.interceptors.request.use(request => {
   console.log(request)
   if(accountService.isLogged()){
     request.headers.Authorization = 'Bearer '+accountService.getToken()
   }
   return request
});


Axios.interceptors.response.use(response =>{
  return response
}, error => {
   console.log(error.response.status)
   if(error.response.status == 401) {
       accountService.logout()
      router.push('/login')
       
   }
})


export default Axios