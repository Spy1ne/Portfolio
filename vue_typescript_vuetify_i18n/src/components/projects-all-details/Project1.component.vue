<template v-slot:activator="{ on, attrs }">
  <div align="center" class="sheet_container">
    <v-container fluid class="sheet_item">
      <v-card flat color="transparent">
        <v-btn class="mt-5 mb-2" text color="blue-grey darken-1" @click="sheet = !sheet">
                  quitter
        </v-btn>
        <h1 style="color :#80CBC4"> {{$t('Projects.Project1.name')}} </h1>
        <v-container class="center justify-center">
          <v-row class="center justify-center">
            <v-col cols="12" v-for="card in cards" :key="card.title">
              <v-img :max-width="card.widths" :max-height="card.heights" :src="card.src" class="white--text align-end" :heights="card.heights">
                <v-card-title v-text="card.title"></v-card-title>
              </v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    sheet: true,
    show: false,
    scrollInvoked: 0,
    offsetTop: 0,
    cards: [
      { title: 'Pre-fab homes', src: require('@/assets/ProjetPresentation/projetillu3d/projetillu3drender.png'), widths: '600px', heights: '', flex: 6 },
      { title: 'Favorite road trips', src: require('@/assets/ProjetPresentation/projetillu3d/projetilluplan.png'), widths: '600px', flex: 6 },
      { title: 'Best airlines', src: require('@/assets/ProjetPresentation/projetillu3d/projetillucoupe.png'), widths: '600px', flex: 6 }
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
</style>
