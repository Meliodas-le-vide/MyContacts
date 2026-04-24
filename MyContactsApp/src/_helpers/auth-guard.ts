import router from "../router"

export function authGuard(_to: any) {
    let token = localStorage.getItem('token')
    console.log(token)

    if(token){
        return true
    }

    router.push('/login')
}