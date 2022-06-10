<template>
  <v-container>
        <v-carousel>
            <v-carousel-item v-for="(item, i) in $t('CarouselPros.CarouselPro99.src')" :key="i"
            :src="require(`@/assets/${item.img}`)"
            >
            <v-row class="fill-height" align="center" justify="center">
          <div class="text-h2">
            {{item.tooltip}}
          </div>
        </v-row>
            </v-carousel-item>
        </v-carousel>
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
import VueExpandableImage from 'vue-expandable-image'
import Vue from 'vue'

Vue.use(VueExpandableImage)
export default Vue.extend({
  mounted () {
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  data: () => ({
    el: '#webapp',
    sheet: false,
    show: false,
    scrollInvoked: 0,
    offsetTop: 0
  }),
  methods: {
    onclick: function () {
      console.log('click')
    }
  },
  props: ['CarouselPro', 'v_sheet', 'src1']
})
</script>
<style>
</style>
