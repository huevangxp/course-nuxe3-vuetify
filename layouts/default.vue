

<template>
<v-app >

<Header/>
  <v-main class="mt-2">
    <slot/>
  </v-main>


</v-app>
</template>

<script lang="ts" setup>
import {definePageMeta} from "#imports";

// definePageMeta({
//   middleware:'authenticate'
// })


</script>

<style scoped></style>
