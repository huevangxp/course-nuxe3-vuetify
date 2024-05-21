

<template>
<v-app >

<Header/>
  <v-main class="mt-2">
    <slot/>
  </v-main>


</v-app>
</template>

<script lang="ts" setup>

definePageMeta({
  middleware:'auth'
})

const token = useCookie('token')

onMounted(()=>{

})


</script>

<style scoped></style>
