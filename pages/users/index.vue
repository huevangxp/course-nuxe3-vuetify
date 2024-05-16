<template>
  <div>
    <div v-if="isLoggedIn">
      Loading ...
    </div>
    <div v-else  >
     <div v-for="data in Users" :key="data.id" class="ma-4 bg-teal pa-4 rounded-s-xl">
       <h1>name: {{data.name}}  </h1>
       <h1>  username: {{data.username}}</h1>

       <h1>email: {{data.email}}</h1>
       <div v-for="item in data.address" :key="data.address">
           <li>{{item}}</li>
       </div>
     </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {apiUserStore} from "~/stores/apiUser";
  import {storeToRefs} from "pinia";

  const {Users, isLoggedIn} = storeToRefs(apiUserStore());

  const {getUser} = apiUserStore();

  onMounted(()=>{
    getUser();
  })

</script>