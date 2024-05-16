<template>
<v-container>
  <v-btn text @click="sendId">send id</v-btn>
</v-container>
</template>

<script setup lang="ts">
useHead({
  title:'About'
})

const router = useRouter()


const sendId =   () => {

  const id = 23;
  const username = 'huevang'
    router.push(`/about/detail/data?id=${id}&username=${username}`);
  // router.push({ path :`/about/detail/data`, query: { id, username }});


}

</script>