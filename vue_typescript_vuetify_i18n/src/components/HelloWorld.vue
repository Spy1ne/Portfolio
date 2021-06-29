<template>
  <div fluid pa-0>
    <v-container fluid pa-0>
      <pf-HomeCover/>
    </v-container>
    <v-container>
      <pf-PresentationHomePage/>
    </v-container>
    <v-container fluid pa-0>
      <v-card color="teal lighten-3" elevation='14'>
        <pf-CardsProjectsPresentation/>
      </v-card>
    </v-container>
    <v-container>
      <v-row>
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            {{$t('message')}}
          </h1>
          <h1 class="display-2 font-weight-bold mb-3">
            {{$t('test')}}
          </h1>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="pa-0 ma-0" style="{background-color: #0000;}">
      rzerzerzrzer <v-spacer/>
      eerzerzer

    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld'
})
</script>
