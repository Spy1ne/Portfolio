<template>
  <v-container fluid pa-0>
    <v-container fluid pa-0>
      <pf-HomeCover/>
    </v-container>
    <v-container>
      <pf-CardsProjectsPresentation/>
    </v-container>
    <v-container>
      <v-row>
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
    <v-container style="{background-color: #0000;}">
      rzerzerzrzer <v-spacer/>
      eerzerzer
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld'
})
</script>
