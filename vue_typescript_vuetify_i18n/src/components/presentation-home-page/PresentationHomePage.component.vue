<template >
    <div>
        <v-card flat color="transparent" align="center" justify="center" class="mt-5 mb-14">
            <v-row align="center" justify="center">
                <v-col class="mt-4 mb-3" cols="12" lg="8">
                    <pf-TextAnim />
                    <h3 class="" >{{ $t("PresentationHomePage.school") }}</h3>
                    <h4 class="" >{{ $t("PresentationHomePage.alternance") }}</h4>
                    <p align="center">
                        <br />{{ $t("PresentationHomePage.Description.paragraph1") }}
                        <br /><br />{{ $t("PresentationHomePage.Description.paragraph2") }}
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
                    <v-divider color="#008080"/>
                    <v-divider color="#008080"/>
                    <v-divider color="#008080"/>
                    <v-container fluid class="sheet_item">
                    <v-card class="mobile-card" flat color="transparent">
                        <v-btn class="mt-5 mb-6" outlined color="white" @click="sheet = !sheet">
                            {{$t("close")}}
                        </v-btn>
                        <h1 class="font-weight-medium">{{ $t("PresentationHomePage.name") }}</h1>
                        <h3 class="">{{ $t("PresentationHomePage.school") }}</h3>
                        <h4 class="mb-7" >{{ $t("PresentationHomePage.alternance") }}</h4>
                        <v-card outlined color="">
                            <v-card class="mt-0 rounded-0" color="teal darken-2 !important">
                            <h3>{{$t("PreSkills")}}</h3>
                            </v-card>
                            <v-card-text min-height="70" align="center" class="white text--primary">
                                <v-row justify="center">
                                    <v-col color="" cols="2" md="auto">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{on, attrs}">
                                                <v-img width="57px" src="@/assets/logo-soft/rhino_50px_50px.png" v-on="on" v-bind="attrs"/>
                                            </template>
                                            <span>Rhino</span>
                                        </v-tooltip>
                                    </v-col>
                                    <v-col color="" cols="2" md="auto">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{on, attrs}">
                                                <v-img width="57px" src="@/assets/logo-soft/archicad_50px_50px.png" v-on="on" v-bind="attrs"/>
                                            </template>
                                            <span>Archicad</span>
                                        </v-tooltip>
                                    </v-col>
                                    <v-col cols="2" md="auto">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{on, attrs}">
                                                <v-img width="57px" src="@/assets/logo-soft/enscape_50px_50px.png" v-on="on" v-bind="attrs"/>
                                            </template>
                                            <span>Enscape</span>
                                        </v-tooltip>
                                    </v-col>
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
                                            <span>V-Ray</span>
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
                                    <v-col cols="2" md="auto" >
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{on, attrs}">
                                                <v-img src="@/assets/logo-soft/pencil_50px_50px.png" v-on="on" v-bind="attrs"/>
                                            </template>
                                            <span>{{$t("PreHandDrawn")}}</span>
                                        </v-tooltip>
                                    </v-col>
                                    <v-col cols="2" md="auto" >
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{on, attrs}">
                                                <v-img src="@/assets/logo-soft/build_50px_50px.png" v-on="on" v-bind="attrs"/>
                                            </template>
                                            <span>{{$t("PreModel")}}</span>
                                        </v-tooltip>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                        <v-timeline class="text-center">
                            <v-timeline-item class="mt-3" icon="mdi-school" color="teal darken-1" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate06")}}</span>
                                <v-card outlined >
                                    <v-card class='rounded-0' color="teal darken-2 !important" >
                                    <h3>{{$t("PreTimelineTitre06")}}</h3>
                                    </v-card>
                                    <v-card-text class="white text--primary">
                                        <p>{{$t("PreTimelineDescr06")}}</p>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item class="mt-3" icon="mdi-briefcase-variant" color="teal darken-1" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate07")}}</span>
                                <v-card outlined >
                                    <v-card class='rounded-0' color="teal darken-2 !important" >
                                    <h3>{{$t("PreTimelineTitre07")}}</h3>
                                    </v-card>
                                    <v-card-text class="white text--primary">
                                        <p>
                                            {{$t("PreTimelineDescr07")}}<br />
                                            {{$t("PreTimelineDescr07_1")}}
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item class="mt-3" icon="mdi-school" color="teal darken-1" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate01")}}</span>
                                <v-card outlined >
                                    <v-card class='rounded-0' color="teal darken-2 !important" >
                                    <h3>{{$t("PreTimelineTitre01")}}</h3>
                                    </v-card>
                                    <v-card-text class="white text--primary">
                                        <p>{{$t("PreTimelineDescr01")}}</p>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item class="mt-3" icon="mdi-briefcase-variant" color="teal darken-1" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate05")}}</span>
                                <v-card outlined >
                                    <v-card class='rounded-0' color="teal darken-2 !important" >
                                    <h3>{{$t("PreTimelineTitre05")}}</h3>
                                    </v-card>
                                    <v-card-text class="white text--primary">
                                        <p>
                                            {{$t("PreTimelineDescr05")}}<br />
                                            {{$t("PreTimelineDescr05_1")}}
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                             <v-timeline-item icon="mdi-account-tie" color="teal lighten-1" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate02")}}</span>
                                <v-card outlined>
                                    <v-card class='rounded-0' color="teal darken-2 !important" >
                                    <h3>{{$t("PreTimelineTitre02")}}</h3>
                                    </v-card>
                                    <v-card-text class="white text--primary">
                                        <p>
                                            {{$t("PreTimelineDescr02")}}<br />
                                            {{$t("PreTimelineDescr02_1")}}<br />
                                            {{$t("PreTimelineDescr02_2")}}
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item icon="mdi-account-tie" color="teal lighten-1" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate03")}}</span>
                                <v-card outlined>
                                    <v-card class='rounded-0' color="teal darken-2 !important" >
                                    <h3>{{$t("PreTimelineTitre03")}}</h3>
                                    </v-card>
                                    <v-card-text class="white text--primary">
                                        <p>
                                            {{$t("PreTimelineDescr03")}}<br />
                                            {{$t("PreTimelineDescr03_1")}}<br />
                                            {{$t("PreTimelineDescr03_2")}}
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>
                            <v-timeline-item icon="mdi-briefcase-variant" color="teal lighten-2" fill-dot>
                                <span class="font-weight-bold" slot="opposite">{{$t("PreTimelineDate04")}}</span>
                                <v-card outlined>
                                    <v-card class='rounded-0' color="teal darken-2 !important" >
                                    <h3>{{$t("PreTimelineTitre04")}}</h3>
                                    </v-card>
                                    <v-card-text class="white text--primary">
                                        <p>
                                            {{$t("PreTimelineDescr04")}}<br>
                                            {{$t("PreTimelineDescr04_1")}}
                                        </p>
                                    </v-card-text>
                                </v-card>
                            </v-timeline-item>

                            <v-col cols="12">
                                <span class="font-weight-bold">{{$t("downloadcv")}}</span>
                            </v-col>
                                <v-btn icon="" elevation="5" rounded class="ma-0" target="_blank" :href="require('@/assets/cv/MAZAL_Mathieu.pdf')"><v-timeline-item class="mt-5" icon="mdi-cloud-download-outline" color="teal lighten-2" fill-dot></v-timeline-item></v-btn>
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
    lgt: '6',
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
max-width: 100vw !important;
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
.v-application .white {
    background-color: #e2e2e200 !important
}
.theme--dark.v-sheet--outlined {
    border: thin solid #008080 !important
}
.v-card .v-card--flat .v-sheet .theme--dark {
    max-width: 100vw !important;
}
element.style {
    max-width: 100vw !important;
}
.mobile-card {
    max-width:50vw;
}
@media (max-width: 800px) {
  .mobile-card {
    max-width:70vw;
  }
}
@media (max-width: 500px) {
  .mobile-card {
    max-width:100vw;
  }
}
</style>
