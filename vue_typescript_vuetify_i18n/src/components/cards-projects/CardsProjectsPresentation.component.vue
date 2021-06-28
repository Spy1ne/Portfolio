<template>
    <v-container>
        <v-card-title>{{$t('TitleAllProject')}}</v-card-title>
        <v-card-text>
            <v-row justify="center">
                <v-col cols="12" sm="6" :md="mdt">
                    <pf-CardsProjects azert="pf-locale" :title-projects='$t("Projects.Project1.name")' src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col cols="12" sm="6" :md="mdt">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col cols="12" sm="6" :md="mdt" >
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col cols="12" sm="6" :md="mdt">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col cols="12" sm="6" :md="mdt">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col cols="12" sm="6" :md="mdt">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col cols="12" sm="6" :md="mdt">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col cols="12" sm="6" :md="mdt">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    sheet: false,
    show: false,
    xst: '12',
    smt: '12',
    mdt: 'auto',
    lgt: '4'
  })
})
</script>
