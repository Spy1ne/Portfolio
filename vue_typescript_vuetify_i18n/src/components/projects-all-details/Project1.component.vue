<template>
            <div align="center" class="sheet_container">
                <v-container fluid class="sheet_item">
                        <v-card min-width="400px" max-width="50vw" flat color="transparent">
                    <v-btn class="mt-5 mb-2" text color="blue-grey darken-1" @click="sheet = !sheet">
                        quitter
                    </v-btn>
                    <h1 class="font-weight-medium">{{ $t("PresentationHomePage.name") }}</h1>
                    <h3 class="mb-5">{{ $t("PresentationHomePage.school") }}</h3>
                    <v-card dark color="teal darken-2">
                        <h3>Competences</h3>
                        <v-card-text min-height="70" align="center" class="white text--primary">
                            <v-row justify="center">
                                <v-col cols="2" md="auto">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-img src="@/assets/logo-soft/autocad_50px_50px.png" v-on="on" v-bind="attrs"/>
                                        </template>
                                        <span>Autocad</span>
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="2" md="auto" >
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-img src="@/assets/logo-soft/revit_50px_50px.png" v-on="on" v-bind="attrs"/>
                                        </template>
                                        <span>Revit</span>
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="2" md="auto">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-img src="@/assets/logo-soft/vray_50px_50px.png" v-on="on" v-bind="attrs"/>
                                        </template>
                                        <span>Vray</span>
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="2" md="auto">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-img src="@/assets/logo-soft/photoshop_50px_50px.png" v-on="on" v-bind="attrs"/>
                                        </template>
                                        <span>Photoshop</span>
                                    </v-tooltip>
                                </v-col>
                                <v-col cols="2" md="auto">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{on, attrs}">
                                            <v-img src="@/assets/logo-soft/indesign_50px_50px.png" v-on="on" v-bind="attrs"/>
                                        </template>
                                        <span>InDesign</span>
                                    </v-tooltip>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                    <v-timeline class="text-center">
                        <v-timeline-item icon="mdi-school" color="teal darken-1" fill-dot>
                            <span class="font-weight-bold" slot="opposite">2019-2022</span>
                            <v-card dark color="teal darken-1">
                                <h3>ESDAC (Clermont-Ferrand)</h3>
                                <v-card-text class="white text--primary">
                                    <p>3éme année de Bachelor Design d'Espace</p>
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                        <v-timeline-item icon="mdi-account-tie" color="teal lighten-1" fill-dot>
                            <span class="font-weight-bold" slot="opposite">Mars 2020</span>
                            <v-card dark color="teal lighten-1">
                                <h3>Stage cabinet d'architecte (Thuret)</h3>
                                <v-card-text class="white text--primary">
                                    <p>Atelier Richard DUMAS (Thuret)<br />Etude et conception
                                    d'aménagement intérieur.<br />Dessin et réalisation de
                                    mobiliers.</p>
                                </v-card-text>
                            </v-card>
                        </v-timeline-item>
                        <v-timeline-item icon="mdi-briefcase-variant" color="teal lighten-2" fill-dot>
                            <span class="font-weight-bold" slot="opposite">2016-2018</span>
                            <v-card dark color="teal lighten-2">
                                <h3>Professionnelles</h3>
                                <v-card-text class="white text--primary">
                                    <p>Contrat 9 mois Laboratoire GEN-BIO (Clermont-ferrand)
                                    <br>Contrat 2 ans EHPAD (Aigueperse)</p>
                                </v-card-text>
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
