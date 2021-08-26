<template>
  <v-container fluid pa-0>
    <div>
    <video disablePictureInPicture preload="auto" muted playsinline autoplay loop id="headerVideo">
      <source src='@/assets/carousel/carousel.mp4' type='video/mp4'/>
    </video>
  </div>
        <!-- <v-card class='pa-0 rounded-0' elevation='10'>
            <v-carousel cycle height="auto" fluid pa-0 show-arrows-on-hover hide-delimiters>
          <v-carousel-item v-for="(item,i) in items" :key="i">
          <video style="100vh !important" disablePictureInPicture onloadedmetadata="this.muted = true" preload="auto" muted playsinline autoplay loop id="headerVideo">
            <source :src="require(`@/assets/${item.src}`)" type='video/mp4'/>
          </video>
        </v-carousel-item>
              </v-carousel>
              </v-card>-->
  </v-container>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      items: [
        {
          src: 'carousel/carousel.mp4'
        },
        {
          src: 'carousel/carousel.mp4'
        }
      ]
    }
  }
})
</script>
<style lang="css" scoped>
video {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: 0;
}
</style>
