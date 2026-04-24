import Axios from "./caller-service";

let login = (credentials: any) =>{
     return Axios.post('/users/login',credentials)
}

let register = (credentials: any) =>{
     return Axios.post('/users',credentials)
}

let logout = () => {
    localStorage.removeItem('token')
}

let getToken = () => {
    return localStorage.getItem('token')
}

let saveToken = (token: string) => {
    localStorage.setItem('token',token)
}

let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}


export const accountService = {
    login,
    register,
    logout,
    getToken,
    saveToken,
    isLogged
}