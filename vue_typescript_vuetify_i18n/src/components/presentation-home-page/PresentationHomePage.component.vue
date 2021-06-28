<template >
    <div>
        <v-card flat color="transparent" align="center" justify="center" class="mt-5 mb-5">
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
            <v-card-actions class="justify-center">
                <v-btn @click="sheet = true" elevation="5" rounded>
                    {{$t("PresentationHomePage.button")}}
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-bottom-sheet v-model="sheet" >
            <v-sheet class="text-center" min-height="300px">
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
                                                <v-img src="@/assets/logo-soft/autocad_45px_50px.png" v-on="on" v-bind="attrs"/>
                                            </template>
                                            <span>Autocad</span>
                                        </v-tooltip>
                                    </v-col>
                                    <v-col cols="2" md="auto" >
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{on, attrs}">
                                                <v-img src="@/assets/logo-soft/revit_41px_50px.png" v-on="on" v-bind="attrs"/>
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
    sheet: false,
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

<style>
.sheet_container{
position:relative;
border-right: 1px #f8f7f3 solid;
/* background-image:url(images/bubble.png); */
/* background-color: black; */
}

.sheet_item
{
height:90vh;
overflow-y:auto;
position:relative;
}
</style>
