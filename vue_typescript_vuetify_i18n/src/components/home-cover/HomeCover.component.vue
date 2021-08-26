<template>
  <v-container fluid pa-0>
    <v-card class='rounded-0' elevation='10'>
      <v-carousel cycle height="auto" fluid pa-0 show-arrows-on-hover hide-delimiters>
          <video disablepictureinpicture preload="auto" muted="muted" autoplay="autoplay" loop="loop" style="height:100vh">
              <source data-v-5e24875b="" src="https://youtu.be/nLd8iPMjff0" type="video/mp4">
          </video>
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
          src: 'https://youtu.be/nLd8iPMjff0'
        }
      ]
    }
  }
})
</script>
