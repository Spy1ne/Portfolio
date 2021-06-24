<template>
    <v-container>
        <v-card-title>{{$t('TitleAllProject')}}</v-card-title>
        <v-card-text>
            <v-row class="text-center">
                <v-col md="3" cols="12">
                    <pf-CardsProjects azert="pf-locale" :title-projects='$t("Projects.Project1.name")' src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col md="3" cols="12">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col md="3" cols="12">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col md="3" cols="12">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col md="3" cols="12">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col md="3" cols="12">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col md="3" cols="12">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
                <v-col md="3" cols="12">
                    <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
                </v-col>
            </v-row>
        </v-card-text>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
