<template v-slot:activator="{ on, attrs }">
            <div align="center" class="sheet_container">
                <v-container fluid class="sheet_item">
                        <v-card flat color="transparent">
                          <v-btn class="mt-5 mb-2" text color="blue-grey darken-1" @click="sheet = !sheet">
                            quitter
                        </v-btn>
                        <h1 class="font-weight-medium">{{ $t("PresentationHomePage.name") }}</h1>
                        <h3 class="mb-5">{{ $t("PresentationHomePage.school") }}</h3>
    <v-container fluid>
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card flat color="blue-grey">
            <v-img :src="card.src" class="white--text align-end" :heights="card.heights">
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
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
      { title: 'Pre-fab homes', src: require('@/assets/ProjetPresentation/projetillu3d/projetillu3drender.png'), heights: 'fluid', flex: 12 },
      { title: 'Favorite road trips', src: require('@/assets/ProjetPresentation/projetillu3d/projetilluplan.png'), heights: '', flex: 12 },
      { title: 'Best airlines', src: require('@/assets/ProjetPresentation/projetillu3d/projetillucoupe.png'), heights: '', flex: 12 }
    ]
  }),
  methods: {
    onclick: function () {
      console.log('click')
    }
  }
})
</script>
