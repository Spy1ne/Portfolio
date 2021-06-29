<template>
  <v-container fluid pa-0>
    <v-card class='rounded-0' elevation='10'>
      <v-carousel cycle height="auto" fluid pa-0 show-arrows-on-hover hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i">
          <v-img :src="item.src" style="height:100vh"/>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      items: [
        {
          src: 'https://media.giphy.com/media/PCQ3vx4nsBQTRgMvgT/giphy.gif'
        },
        {
          src: 'https://media.giphy.com/media/yUfrQSO8Wkpn442vBz/giphy.gif'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
})
</script>
