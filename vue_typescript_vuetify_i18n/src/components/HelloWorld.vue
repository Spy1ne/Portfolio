<template>
  <div fluid pa-0>
    <v-container fluid pa-0>
      <pf-HomeCover id="home"/>
    </v-container>
    <v-divider class="mt-n1" color="white"/>
    <v-container>
      <pf-PresentationHomePage/>
    </v-container>
    <v-divider color="white"/>
    <v-container fluid pa-0>
        <v-divider></v-divider>
      <v-card class='rounded-0' align="center" color="blue-grey darken-4" elevation='14'>
         <pf-CardsProjectsPresentation id="project"/>
      </v-card>
    </v-container>
    <v-divider color="white"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld'
})
</script>
