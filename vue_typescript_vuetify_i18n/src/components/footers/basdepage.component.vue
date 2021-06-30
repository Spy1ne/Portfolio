<template>
<v-footer dark padless>
  <v-card elevation='14' flat tile class="flex teal lighten-3 white--text text-center">
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
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    networks: [
      {
        icon: 'mdi-facebook',
        url: 'http://zezez.com'
      },
      {
        icon: 'mdi-twitter',
        url: 'http://google.com'
      },
      {
        icon: 'mdi-linkedin',
        url: 'http://google.com'
      },
      {
        icon: 'mdi-instagram',
        url: 'http://google.com'
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
