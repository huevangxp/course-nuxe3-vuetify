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
                const router = useRouter();
              await $axios.post('/login', data)
                  .then((res)=>{
                      const token = res.data.token;
                      console.log(token)
                      setToken.value = token;
                      router.push("/");
                  })
          }catch (e) {
              console.log(e)
          }
        }
    },
    getters:{

    }

})