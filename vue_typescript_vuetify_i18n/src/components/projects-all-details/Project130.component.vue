<template v-slot:activator="{ on, attrs }">
          <v-sheet min-height="100vh" class="text-center">
  <div align="center" class="sheet_container">
            <v-divider color="#cf9b58"/>
          <v-divider color="#cf9b58"/>
          <v-divider color="#cf9b58"/>
    <v-container fluid class="sheet_item">
      <v-card class="center justify-center" flat color="transparent">
        <h1 class="mt-6 mb-6 gradient-text">
          {{$t('Projects.Project130.name')}}
        </h1>
        <v-btn class="" outlined color="white" @click="show = !sheet">
          {{$t('return')}}
        </v-btn>
        <v-divider width="1050px" class="mt-4" color="#cf9b58"/>
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
          </v-sheet>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  el: '#webapp',
  data: () => ({
    sheet: false,
    scrollInvoked: 0,
    offsetTop: 0
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
  margin-right: 40px !important;
}
}
#silentbox-overlay__close-button {
  margin-right: 20px;
}
</style>
