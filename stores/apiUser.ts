import {defineStore} from "pinia";

export const apiUserStore = defineStore("apiUser", {
    state:() => ({
        isLoggedIn: false,
        Users:[]
    }),
    actions: {
        async getUser(){
            try{
                this.isLoggedIn = true;
                const {$axios} = useNuxtApp();
                await  $axios.get(`users`)
                    .then((res) => {
                        // console.log(res.data)
                        this.Users = res.data;
                        this.isLoggedIn = false
                    })
            }catch (err:any) {

            }
        }
    },
    getters:{}
})