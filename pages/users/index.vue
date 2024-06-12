<!-- layout.vue | page.vue | component.vue -->

<template>
  <div>
    <h1 class="title">Nuxt Anime</h1>
  </div>
</template>

<script setup lang="ts">
  const { $anime } = useNuxtApp()

  onMounted(() => {
    $anime({
  targets: 'div',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800
});
  })
</script>
