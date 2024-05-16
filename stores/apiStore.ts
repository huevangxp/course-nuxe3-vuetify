import {defineStore} from "pinia";
import {useCookie} from "#app";

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
        async sendLogin(data: any){
          try {
              const {$axios } = useNuxtApp()

              const setToken = useCookie('token')

              await $axios.post('/login', data)
                  .then((res)=>{
                      const token = res.data.token;
                      setToken.value = token;
                  })
          }catch (e) {
              console.log(e)
          }
        }
    },
    getters:{

    }

})