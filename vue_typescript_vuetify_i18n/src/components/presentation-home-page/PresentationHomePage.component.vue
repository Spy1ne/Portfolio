<template>
    <div>
        <v-card flat color="transparent" align="center" justify="center">
            <v-row align="center" justify="center">
                <v-col cols="12" :sm="smti" :lg="lgti">
                    <v-avatar :width="sizei" :height="sizei">
                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                </v-col>
                <v-col align="left" class="ml-5" cols="12" :sm="smt" :lg="lgt">
                    <h1 class="font-weight-medium">{{ $t("PresentationHomePage.name") }}</h1>
                    <h3>{{ $t("PresentationHomePage.school") }}</h3>
                    <p>
                    <br />{{ $t("PresentationHomePage.Description.paragraph1") }}
                    <br /><br />{{ $t("PresentationHomePage.Description.paragraph2") }}
                    <br /><br />{{ $t("PresentationHomePage.Description.paragraph3") }}
                    </p>
                </v-col>
            </v-row>
            <v-card-action>
                <v-btn @click="sheet = true" elevation="5" rounded>
                    {{$t("PresentationHomePage.button")}}
                </v-btn>
            </v-card-action>
        </v-card>
        <v-bottom-sheet :value="showBottomSheet" v-model="sheet">
            <v-sheet class="text-center" height="1000px">
                    <v-btn class="mt-5 mb-2" text color="red" @click="sheet = !sheet">
                        quitter
                    </v-btn>
                    <h1 class="font-weight-medium">{{ $t("PresentationHomePage.name") }}</h1>
                    <h3>{{ $t("PresentationHomePage.school") }}</h3>
                    <v-card align="center" justify="center" flat color="transparent">
                        <v-col :sm="smt" :lg="lgt">
                            <v-card color="red lighten-2">
                                <v-card dark color="red lighten-2">
                                    <h3>Competences</h3>
                                    <v-card-text class="white text--primary">
                                        <v-row justify="center">
                                            <v-col cols="4" md="auto">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{on, attrs}">
                                                        <v-img max-height="50px" max-width="45px" src="@/assets/logo-soft/autocad_45px_50px.png" v-on="on" v-bind="attrs"/>
                                                    </template>
                                                    <span>Autocad</span>
                                                </v-tooltip>
                                            </v-col>
                                            <v-col cols="4" md="auto" >
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{on, attrs}">
                                                        <v-img max-height="50px" max-width="45px" src="@/assets/logo-soft/revit_41px_50px.png" v-on="on" v-bind="attrs"/>
                                                    </template>
                                                    <span>Revit</span>
                                                </v-tooltip>
                                            </v-col>
                                            <v-col cols="4" md="auto">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{on, attrs}">
                                                        <v-img max-height="50px" max-width="45px" src="@/assets/logo-soft/vray_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                    </template>
                                                    <span>Vray</span>
                                                </v-tooltip>
                                            </v-col>
                                            <v-col cols="4" md="auto">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{on, attrs}">
                                                        <v-img max-height="50px" max-width="45px" src="@/assets/logo-soft/photoshop_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                    </template>
                                                    <span>Photoshop</span>
                                                </v-tooltip>
                                            </v-col>
                                            <v-col cols="4" md="auto">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{on, attrs}">
                                                        <v-img max-height="50px" max-width="45px" src="@/assets/logo-soft/indesign_50px_50px.png" v-on="on" v-bind="attrs"/>
                                                    </template>
                                                    <span>InDesign</span>
                                                </v-tooltip>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-card>
                            <v-timeline float>
                                <v-timeline-item color="red lighten-2" small fill-dot>
                                    <span slot="opposite">2019-2022</span>
                                    <v-card dark color="red lighten-2">
                                        <h3>ESDAC (Clermont-Ferrand)</h3>
                                        <v-card-text class="white text--primary">
                                            <p>3éme année de Bachelor Design d'Espace</p>
                                        </v-card-text>
                                    </v-card>
                                </v-timeline-item>
                                <v-timeline-item color="red lighten-2" small fill-dot>
                                    <span slot="opposite">Mars 2020</span>
                                    <v-card dark color="red lighten-2">
                                        <h3>Stage cabinet d'architecte (Thuret)</h3>
                                        <v-card-text class="white text--primary">
                                            <p>Atelier Richard DUMAS (Thuret)<br />Etude et conception
                                            d'aménagement intérieur.<br />Dessin et réalisation de
                                            mobiliers.</p>
                                        </v-card-text>
                                    </v-card>
                                </v-timeline-item>
                                <v-timeline-item color="red lighten-2" small fill-dot>
                                    <span slot="opposite">2016-2018</span>
                                    <v-card dark color="red lighten-2">
                                        <h3>Professionnelles</h3>
                                        <v-card-text class="white text--primary">
                                            <p>Contrat 9 mois Laboratoire GEN-BIO (Clermont-ferrand)
                                                <br>Contrat 2 ans EHPAD (Aigueperse)</p>
                                        </v-card-text>
                                    </v-card>
                                </v-timeline-item>
                            </v-timeline>
                        </v-col>
                    </v-card>
            </v-sheet>
        </v-bottom-sheet>
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
    offsetTop: 0
  }),
  methods: {
    onclick: function () {
      console.log('click')
    }
  }
})
</script>
