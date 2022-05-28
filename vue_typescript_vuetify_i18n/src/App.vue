<template>
  <v-app>
    <v-main class="pt-0">
      <router-view/>
    </v-main>
    <pf-Footer/>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  })
})
</script>
