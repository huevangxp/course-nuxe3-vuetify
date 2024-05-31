<template>
  <v-app style="background-color: #F0F5F9;">
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        @click="rail = false"
       class="bg-white mx-16 mt-6 elevation-20 rounded-lg "
style="height: 900px"
    >
      <v-card elevation="0" class="mx-auto">
        <v-card-title class="d-flex justify-center">
          <v-icon v-if="rail" size="50px" color="teal">mdi-bitcoin</v-icon>
          <v-icon v-else size="100px" color="teal">mdi-bitcoin</v-icon>
        </v-card-title>
      </v-card>
      <v-list>
        <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
        >
          <v-list-item-action>
          </v-list-item-action>
          <v-list-item-content >
            <v-list-item-title> <v-icon>{{item.icon}}</v-icon> {{ item.title }}</v-list-item-title>
          </v-list-item-content>

        </v-list-item>

      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block elevation="0" color="red" dark>
            Logout <v-icon class="mx-2" size="30">mdi-power</v-icon>
          </v-btn>
        </div>
      </template>

    </v-navigation-drawer>
    <div style="text-align: center">
      <v-app-bar :clipped-left="clipped"  class="mt-6 py-2 rounded-lg scroll"  style="margin-left: 200px; width: 1300px">
        <v-btn
            icon
            @click.stop="rail = !rail"
        >
          <v-icon large>mdi-{{ `${rail ? 'sort-reverse-variant' : 'sort-variant'}` }}</v-icon>
        </v-btn>
        <h3 class="text-teal">{{ title }}</h3>
        <v-spacer />
        <v-text-field

            density="compact"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="solo-filled"
            flat
            hide-details
            single-line
        ></v-text-field>
        <v-btn
            density="default"
            class="bg-teal text-white mx-2 rounded-pill"
        >
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </v-app-bar>
    </div>
    <v-main>
      <v-card elevation="0" max-width="1300" class=" pt-12 rounded-lg" style="background-color: #F0F5F9; margin-left: 200px;">
        <NuxtPage />
      </v-card>
    </v-main>
  </v-app>
</template>
<script setup>
import { ref } from 'vue'

const clipped = ref(false)
const drawer = ref(false)
const miniVariant = ref(false)
const title = ref('Admin')
   const  rail = ref(false)
const items = [
  {
    icon: 'mdi-apps',
    title: 'Welcome',
    to: '/'
  },
  {
    icon: 'mdi-chart-bubble',
    title: 'bout',
    to:'/about'
  },
  {
    icon: 'mdi-chart-bubble',
    title: 'user',
    to:'/users'
  }
]

const toggleMiniVariant = () => {
  miniVariant.value = !miniVariant.value
}
</script>
<style>
.scroll {
  position: sticky;
  top: 0px;
  z-index: 1; /* Ensure it's above other elements */
}
</style>
