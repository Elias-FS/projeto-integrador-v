export default function authHeader() {
    const user =  JSON.parse(localStorage.getItem('usuario'))

    if(user && user.accessToken) {
        return {Authorization: 'Bearer ' + user.accessToken};
    } else {
        return{};
    }
}