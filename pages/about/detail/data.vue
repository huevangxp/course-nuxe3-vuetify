<template>
  <div>
    {{id}} username: {{username}}
  </div>
</template>

<script setup lang="ts">

  const route = useRoute()
  const id = route.query.id;
  const username = route.query.username;
console.log(route.query)
</script>