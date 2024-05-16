
import axios from 'axios';
export default defineNuxtPlugin((nuxtApp) => {

    const api = axios.create({
        // baseURL: 'https://jsonplaceholder.typicode.com/'
        baseURL: 'http://localhost:7000/api/'

    })
    return{
        provide:{
            axios: api
        }
    }

})
