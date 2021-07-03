<template>
    <v-hover v-slot="{ hover }">
      <a @click="sheet = !sheet">
        <v-card :elevation="hover ? 16 : 2" height="340px" max-width="350" >
          <v-img align="left" :src="require(`@/assets/${$props.project.thumbnail_name}`)" height="250px">
            <span color='red' class="text-h5 pl-4 pt-4 d-inline-block"><p style="color :#80CBC4"> {{$props.project.name}} </p></span>
          </v-img>
          <v-card-title min-height="70" align="center" class="white text--primary">
            <v-row justify="center">
              <v-col cols="2" v-for="(item, i) in $props.project.softwares" :key="i">
                <v-img max-width="30px" max-height="30px" :src="require(`@/assets/${item}`)" />
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-subtitle color="blue-grey darken-1">LOGO Logiciels et descriptif rapide</v-card-subtitle>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358"></v-overlay>
          </v-fade-transition>
        </v-card>
        <v-bottom-sheet v-model="sheet">
          <v-sheet class="text-center" min-height="300px">
            <div :is='$props.project.sheet'>
            </div>
          </v-sheet>
        </v-bottom-sheet>
      </a>
    </v-hover>
</template>

<script>

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
