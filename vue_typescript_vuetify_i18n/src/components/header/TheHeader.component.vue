<template>
  <v-app-bar flex app dense color='rgb(255,255,255,0.3)' >
      <v-toolbar-title> <a @click="scrollTo('#home')" style="color:white !important">{{$store.state.name}}</a> </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="scrollTo('#project')"> aaa</v-btn>
      <pf-locale/>
  </v-app-bar>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
  }),
  methods: {
    scrollTo: function (targetId) {
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' })
    }
  }
})
</script>
