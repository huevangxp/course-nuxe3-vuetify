
<template>
  <v-app-bar :elevation="0" color="teal">
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
  
    <v-app-bar-title>Application Bar</v-app-bar-title>
    <v-spacer/>
    <v-btn   to="/" text>Home</v-btn>
    <v-btn to="/about" tonal>About</v-btn>
    <v-btn to="/users" tonal>users</v-btn>
    <v-btn   tonal>product</v-btn>
    <v-btn   tonal @click="logout"> <v-icon dark>mdi-power</v-icon> </v-btn>

  </v-app-bar>
</template>

<script lang="ts" setup>
const token = useCookie('token')





</script>


