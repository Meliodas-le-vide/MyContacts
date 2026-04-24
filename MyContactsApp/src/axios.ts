import axios from "axios";

axios.defaults.baseURL = 'https://api-contact.zoul.dev/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token')