<template>
    <v-hover v-slot="{ hover }">
      <a @click="sheet = !sheet">
        <v-card class='rounded-0' :elevation="hover ? 18 : 7" max-width="350" >
          <v-img align="left" :src="require(`@/assets/${$props.project.thumbnail_name}`)" height="350px" width="350px">
            <span class="text-h5 pl-4 pt-4 d-inline-block"><p style="color :"> {{$props.project.name}} </p></span>
          </v-img>
          <v-fade-transition >
            <v-overlay v-if="hover" opacity="0.9" absolute color='rgba(109,91,58,1'>
              <v-card-title min-height="70">
                <v-row>
                  <v-col v-for="(item, i) in $props.project.softwares" :key="i">
                    <v-img max-width="35px" max-height="35px" :src="require(`@/assets/${item}`)" />
                  </v-col>
                </v-row>
              </v-card-title>
              <v-card-subtitle class="text-h6 pl-4 pt-4" style="color :#FFFFFF">LOGO Logiciels et descriptif rapide</v-card-subtitle>
            </v-overlay>
          </v-fade-transition>
        </v-card>
        <v-bottom-sheet v-model="sheet">
          <v-divider color="#cf9b58"/>
          <v-divider color="#cf9b58"/>
          <v-divider color="#cf9b58"/>
          <v-sheet min-height="100vh" class="text-center">
            <div :is='$props.project.sheet'>
            </div>
          </v-sheet>
        </v-bottom-sheet>
      </a>
    </v-hover>
</template>

<script lang="ts">

import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    sheet: false,
    show: false
  }),
  methods: {
    onclick: function () {
      console.log('click')
    }
  },
  props: ['project']
})
</script>
