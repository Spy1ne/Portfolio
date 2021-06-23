<template>
  <v-carousel show-arrows-on-hover height="auto" hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
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
