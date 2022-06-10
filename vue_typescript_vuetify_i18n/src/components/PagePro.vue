<template>
  <div fluid pa-0>
    <v-container fluid pa-0>
      <pf-HomeCoverPro id="home" carousel-pro="" />
      <p id="present"></p>
      <pf-PresentationHomePagePro class="mb-9"/>
    </v-container>
      <v-divider class="" opacity="0" color="white"/>
      <v-divider class="mb-3" opacity="0" color="white"/>
    <v-container fluid pa-0 id="contacts">
      <v-card class='rounded-0' align="center" color="blue-grey darken-4">
        <pf-ContactsPro/>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'PagePro'
})
</script>
