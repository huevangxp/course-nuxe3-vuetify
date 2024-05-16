

<template>
  <v-container class="mt-10">
    <h1 class="text-center" @click="clickSenddata">
      Logn in page
    </h1>
  <v-card max-width="600" class="mx-auto elevation-0 mt-10">
      <v-row>
        <v-col cols="12" >
          <v-text-field
              v-model=" username"
              clearable
              label="username"
          ></v-text-field>

          <v-text-field
              v-model="password"
              clearable
              label="password"
          ></v-text-field>

        </v-col>
      </v-row>
    <v-card-title>
      Foget password
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn class="bg-teal" flat width="60" height="40" @click="clickSenddata">Login</v-btn>
    </v-card-actions>
  </v-card>
  </v-container>
</template>

<script lang="ts" setup>

// import {useLayout} from "vuetify";

// definePageMeta({
//   middleware: ['uaAuth']
// })

definePageMeta({
  // middleware: 'unAuth',
  layout: false,

})

// useHead({
//   title:'Login',
// })
import {apiStore} from '~/stores/apiStore'
import {storeToRefs} from "pinia";

// get state/getters
const {Posts} = storeToRefs(apiStore());

// call function/action
const {getPost, sendLogin } = apiStore();

const username = ref('')
const password = ref('')

const token = useCookie('token');


const clickSenddata = async () => {


  const data = {
    username:username.value,
    password: password.value
  };
  sendLogin(data)
}

onMounted(()=>{
  getPost();

})

</script>

<style scoped></style>
