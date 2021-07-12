<template v-slot:activator="{ on, attrs }">

  <div align="center" class="sheet_container">
    <v-container fluid class="sheet_item">
      <v-card flat color="transparent">
        <h1 class="mt-5 mb-2 gradient-text">
          {{$t('Projects.Project1.name')}}
        </h1>
        <v-btn class="" text color="white" @click="sheet = !sheet">
          {{$t('Projects.Project1.v_sheet.return')}}
        </v-btn>
        <v-divider width="1050px" class="mt-6" color="#cf9b58"/>
        <v-divider width="1050px" color="#cf9b58"/>
        <v-divider width="1050px" class="mb-6" color="#cf9b58"/>
        <v-container class="center justify-center">
          <v-row class="center justify-center ">
            <v-col cols="12" v-for="card in cards1" :key="card.title">
              <v-img :max-width="card.widths" :max-height="card.heights" :src="card.src" class="white--text align-end" :heights="card.heights">
                <v-card-title elevation="10">
                  {{$t('Projects.Project1.v_sheet.photo1')}}
                </v-card-title>
              </v-img>
            </v-col>
            <p>
              {{$t('Projects.Project1.v_sheet.details')}}
            </p>
            <v-col cols="12" v-for="card in cards2" :key="card.title">
              <v-img :max-width="card.widths" :max-height="card.heights" :src="card.src" class="white--text align-end" :heights="card.heights">
                <v-card-title v-text="$t(card.title)"></v-card-title>
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
    scrollInvoked: 0,
    offsetTop: 0,
    cards1: [
      { title: '', src: require('@/assets/ProjetPresentation/projetillu3d/projetillu3drender.png'), widths: '1000px', heights: '' }
    ],
    cards2: [
      { title: 'Projects.Project1.v_sheet.photo2', src: require('@/assets/ProjetPresentation/projetillu3d/projetilluplan.png'), widths: '600px' },
      { title: 'Projects.Project1.v_sheet.photo3', src: require('@/assets/ProjetPresentation/projetillu3d/projetillucoupe.png'), widths: '600px' }
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
