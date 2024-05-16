<template>
  <div :style="{ backgroundColor: c1 ? c1 : 'teal' }" class="py-3">
    <v-card-title class="text-white">{{c1}}</v-card-title>
    <v-color-picker
        v-model="c1"
        hide-inputs
        show-swatches
    ></v-color-picker>
    <div class="my-10 mx-10"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const c1 = ref(null);

useSeoMeta({
  title: 'My Amazing Site',
});


</script>
