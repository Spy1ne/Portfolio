<template>
<v-container pa-0 fluid >
<v-divider color="white"/>
<v-footer dark padless>
  <v-card elevation='14' flat tile class="flex white--text text-center">
    <v-card-text>
      <v-btn v-for="network in networks" :key="network.icon" class="mx-4 white--text" icon @click="onclick(network.url)" >
        <v-icon size="24px"> {{ network.icon }} </v-icon>
      </v-btn>
    </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="white--text">
        {{ new Date().getFullYear() }} <strong>Contact</strong>
    </v-card-text>
  </v-card>
  </v-footer>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    networks: [
      {
        icon: 'mdi-linkedin',
        url: 'https://www.linkedin.com/in/mathieu-mazal-51b130124/'
      },
      {
        icon: 'mdi-instagram',
        url: 'https://www.instagram.com/mathieumzl/'
      },
      {
        icon: 'mdi-artstation',
        url: 'https://www.artstation.com/mathieu_mazal'
      }
    ]
  }),
  methods: {
    onclick: function (link:string) {
      window.open(link, '_blank')
    }
  }
})
</script>
