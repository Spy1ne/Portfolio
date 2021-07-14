<template v-slot:activator="{ on, attrs }">
  <div align="center" class="sheet_container">
    <v-container fluid class="sheet_item">
      <v-card flat color="transparent">
        <h1 class="mt-5 mb-2 gradient-text">
          {{$t('Projects.Project1.name')}}
        </h1>
        <v-btn text color="white" @click="sheet = !sheet">
          {{$t('Projects.Project1.v_sheet.return')}}
        </v-btn>
        <v-divider width="1050px" class="mt-6" color="#cf9b58"/>
        <v-divider width="1050px" color="#cf9b58"/>
        <v-divider width="1050px" class="mb-6" color="#cf9b58"/>
        <v-container class="center justify-center">
          <v-row class="center justify-center ">
            <v-col cols="12">
                <silent-box :v-text="cards1.title" :gallery="cards1">
                </silent-box>
            </v-col>
            <v-col cols="12">
              <v-divider width="800px" class="mb-6 mt-13" color="#cf9b58"/>
                <v-card-text>
                  Colored text, you may change alert color  into any you'd likeColored text, you may change alert color  into any you'd like.<br>
                 Colored text, you may change alert color  into any you'd likeColored text, you may change alert color  into any you'd like.<br>
                 Colored text, you may change alert color  into any you'd likeColored text, you may change alert color  into any you'd like.<br>
                 Colored text, you may change alert color  into any you'd likeColored text, you may change alert color  into any you'd like.<br>
                 Colored text, you may change alert color  into any you'd likeColored text, you may change alert color  into any you'd like.
                 </v-card-text>
              <v-divider width="800px" class="mb-8 mt-6" color="#cf9b58"/>
            </v-col>
            <v-col>
              <silent-box :gallery="cards2"/>
              <v-card-subtitle flat class="flat text-h6 mt-15" style="color :#FFFFFF">LOGO Logiciels et descriptif rapide</v-card-subtitle>
            </v-col>
          </v-row>
        <!-- directive -->
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

import VueSilentbox from 'vue-silentbox'

Vue.use(VueSilentbox)

export default Vue.extend({
  el: '#webapp',
  data: () => ({
    sheet: false,
    show: false,
    scrollInvoked: 0,
    offsetTop: 0,
    cards1: [
      { title: '<v-card-title>zezeze</v-card-title>', description: 'Plan', thumbnailWidth: '80%', src: require('@/assets/ProjetPresentation/projetillu3d/projetillu3drender.png') }
    ],
    cards2: [
      { title: 'Projects.Project1.v_sheet.photo2', description: 'Plan', thumbnailWidth: '50%', src: require('@/assets/ProjetPresentation/projetillu3d/projetilluplan.png') },
      { title: 'Projects.Project1.v_sheet.photo3', description: 'Coupe', thumbnailWidth: '50%', src: require('@/assets/ProjetPresentation/projetillu3d/projetillucoupe.png') }
    ]
  }),
  methods: {
    onclick: function () {
      console.log('click')
    }
  },
  props: ['project']
})
</script>
<style>
element.style {
    opacity: 1;
}
@media (max-width: 1024px) {
#silentbox-overlay__close-button {
  width: 0 !important;
  height: 0 !important;
  margin-right: 30px;
}
}
#silentbox-overlay__close-button {
  margin-right: 20px;
}
</style>
