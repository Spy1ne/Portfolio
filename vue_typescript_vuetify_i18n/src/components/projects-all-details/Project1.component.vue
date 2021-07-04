<template v-slot:activator="{ on, attrs }">
            <div align="center" class="sheet_container">
                <v-container fluid class="sheet_item">
                        <v-card min-width="400px" max-width="50vw" flat color="transparent">
                    <v-btn class="mt-5 mb-2" text color="blue-grey darken-1" @click="sheet = !sheet">
                        quitter
                    </v-btn>
                    <h1 class="font-weight-medium">{{ $t("Projects.Project1.name") }}</h1>
                    <h3 class="mb-5">{{ $t("Projects.Project1.description") }}</h3>
                    <v-card height="auto" elevation='14' class="justify-center">
                        <v-img src="@/assets/ProjetPresentation/projetillu3d/projetillu3drender.png"/>
                    </v-card>
                    <v-timeline class="text-center">
                        <v-timeline-item class="mt-14" icon="1" color="teal darken-1" fill-dot>
                            <span class="font-weight-bold" slot="opposite">2019-2022</span>
                            <v-card dark color="teal darken-1">
                                <v-img src="@/assets/ProjetPresentation/projetillu3d/projetilluplan.png"/>
                            </v-card>
                        </v-timeline-item>
                        <v-timeline-item icon="2" color="teal lighten-1" fill-dot>
                            <span class="font-weight-bold" slot="opposite">Mars 2020</span>
                            <v-card dark color="teal lighten-1">
                               <v-img src="@/assets/ProjetPresentation/projetillu3d/projetillucoupe.png"/>
                            </v-card>
                        </v-timeline-item>
                    </v-timeline>
                    </v-card>
                </v-container>
            </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    smt: '8',
    lgt: '6',
    smti: '4',
    lgti: '2',
    sizei: '100%',
    sheet: true,
    show: false,
    scrollInvoked: 0,
    offsetTop: 0
  }),
  methods: {
    onclick: function () {
      console.log('click')
    }
  }
})
</script>
