<template>
  <div fluid pa-0>
    <v-container fluid pa-0>
      <pf-HomeCover/>
    </v-container>
    <v-divider color="white"/>
    <v-container>
      <pf-PresentationHomePage/>
    </v-container>
    <v-divider color="white"/>
    <v-container fluid pa-0>
        <v-divider></v-divider>
      <v-card class='rounded-0' align="center" color="blue-grey darken-4" elevation='14'>
         <pf-CardsProjectsPresentation/>
      </v-card>
    </v-container>
    <v-divider color="white"/>
    <v-container>
      <v-row>
        <v-col class="mb-4">
          <h1 color="teal lighten-3" class="display-2 font-weight-bold mb-3">
            {{$t('message')}}
          </h1>
          <h1 class="display-2 font-weight-bold mb-3">
            {{$t('test')}}
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="pa-0" style="{background-color: #0000;}">
      ici Projet de 3éme année <v-spacer/>
         <pf-TextAnim />
      Le deroulement etc.
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld'
})
</script>
