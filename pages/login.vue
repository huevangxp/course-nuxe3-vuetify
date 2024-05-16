<script lang="ts" setup>
// useHead({
//   title:'Login',
// })
import {apiStore} from '~/stores/apiStore'
import {storeToRefs} from "pinia";

// get state/getters
const {Posts} = storeToRefs(apiStore());

// call function/action
const {getPost, sendPost } = apiStore();


const clickSenddata = async () => {
  const data = {
    username: 'hueavng',
    email: 'hueavng@gmail.com',
    password: 'password@gmail.com'
  }

  sendPost(data)
}

onMounted(()=>{
  getPost();
})

</script>

<template>
  <v-container class="mt-10">
    <h1 class="text-center" @click="clickSenddata">
      Logn in page
    </h1>

    {{Posts}}
  </v-container>
</template>

<style scoped></style>
