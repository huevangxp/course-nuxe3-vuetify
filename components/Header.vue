
<template>
  <v-app-bar :elevation="0" color="teal">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
  
    <v-app-bar-title>Application Bar</v-app-bar-title>
    <v-spacer/>
    <v-btn   to="/" text>Home</v-btn>
    <nuxt-link to="/about/"> About</nuxt-link>
    <v-btn to="/users" tonal>users</v-btn>
    <v-btn   tonal>product</v-btn>
    <v-btn   tonal @click="logout"> <v-icon dark>mdi-power</v-icon> </v-btn>

  </v-app-bar>
</template>

<script lang="ts" setup>
const token = useCookie('token')
const router = useRouter();

const logout =()=>{
  token.value = null;

  router.push('/login');
}

</script>


