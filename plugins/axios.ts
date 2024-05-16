
import axios from 'axios';
export default defineNuxtPlugin((nuxtApp) => {

    const api = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    })

    return{
        provide:{
            axios: api
        }
    }

})
