import {defineStore} from "pinia";

export  const apiStore = defineStore('apiStore',{


    state:()=>( {
        Posts:[]
    }),
    actions:{
        async getPost(){
            const {$axios} = useNuxtApp();


            const res = await  $axios.get(`posts`);
            const data = res.data;
            this.Posts = data;
            console.log(data)

        },
        async sendPost(data: any){
            console.log("Sending post...", data);
            alert('login success')
        }
    },
    getters:{

    }

})