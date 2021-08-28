<template>
  <v-app-bar flex app dense color='rgb(38, 50, 56, 0.6)' >
      <v-toolbar-title> <a @click="scrollTo('#home')" style="color:white !important">{{$store.state.name}}</a> </v-toolbar-title>
      <v-spacer></v-spacer>
        <h4 class="mr-4">|</h4>
        <a class="mr-4" style="color:white !important" @click="scrollTo('#present')"><h3>{{$t('HeaderPresentation')}}</h3></a>
        <h4 class="mr-4">|</h4>
        <a class="mr-4" style="color:white !important" @click="scrollTo('#contacts')"><h3>{{$t('HeaderContact')}}</h3></a>
        <h4 class="mr-4">|</h4>
        <a class="mr-4" color="transparent" style="color:white !important" @click="scrollTo('#projects')"><h3>{{$t('HeaderProjets')}}</h3></a>
        <h4 class="mr-4">|</h4>
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
