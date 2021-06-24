<template>
  <v-app-bar flex app dense color="transparent" >
      <v-toolbar-title>{{$store.state.name}} </v-toolbar-title>
      <v-spacer></v-spacer>
      <pf-locale/>
  </v-app-bar>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
  })
})
</script>
