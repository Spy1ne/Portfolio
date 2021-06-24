<template>
    <div fluid pa-0 class="grey lighten-2">
        <v-container>
            <v-card-title>{{$t('TitleAllProject')}}</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" :xs="xst" :sm="smt" :md="mdt" :lg="lgt">
                        <pf-CardsProjects azert="pf-locale" :title-projects='$t("Projects.Project1.name")' src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                    </v-col>
                    <v-col cols="12" :xs="xst" :sm="smt" :md="mdt" :lg="lgt">
                        <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                    </v-col>
                    <v-col cols="12" :xs="xst" :sm="smt" :md="mdt" :lg="lgt">
                        <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                    </v-col>
                    <v-col cols="12" :xs="xst" :sm="smt" :md="mdt" :lg="lgt">
                        <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                    </v-col>
                    <v-col cols="12" :xs="xst" :sm="smt" :md="mdt" :lg="lgt">
                        <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                    </v-col>
                    <v-col cols="12" :xs="xst" :sm="smt" :md="mdt" :lg="lgt">
                        <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                    </v-col>
                    <v-col cols="12" :xs="xst" :sm="smt" :md="mdt" :lg="lgt">
                        <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                    </v-col>
                    <v-col cols="12" :xs="xst" :sm="smt" :md="mdt" :lg="lgt">
                        <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-container>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    sheet: false,
    show: false,
    xst: '12',
    smt: '12',
    mdt: '6',
    lgt: '4'
  })
})
</script>
