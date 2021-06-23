<template>
  <div>
    <v-container fluid pa-0>
      <pf-HomeCover/>
    </v-container>
    <v-container>
      <v-row class="text-center">
        <v-col md="3" cols="12">
          <pf-Project/>
          <pf-CardsProjects :title-projects='$t("Projects.Project1.name")' src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
        </v-col>
        <v-col md="3" cols="12">
          <pf-Project/>
          <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
        </v-col>
        <v-col md="3" cols="12">
          <pf-Project/>
          <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
        </v-col>
        <v-col md="3" cols="12">
          <pf-Project/>
          <pf-CardsProjects src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"/>
        </v-col>

        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            {{$t('message')}}
          </h1>
          <h1 class="display-2 font-weight-bold mb-3">
            {{$t('salut')}}
          </h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld'
})
</script>
