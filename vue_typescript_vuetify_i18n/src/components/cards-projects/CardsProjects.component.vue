<template>
    <v-hover v-slot="{ hover }">
      <a @click="sheet = !sheet">
        <v-card :elevation="hover ? 16 : 2" height="350px" max-width="350">
          <v-img :src="$props.src" height="250px">
            <span class="text-h5 pl-4 pt-4 d-inline-block">{{$props.titleProjects}}</span>
          </v-img>

          <v-card-title> {{$props.titleProjects}} </v-card-title>

          <v-card-subtitle> LOGO Logiciels et descriptif rapide </v-card-subtitle>
          <v-fade-transition>
            <v-overlay v-if="hover" absolute color="#036358"></v-overlay>
          </v-fade-transition>
        </v-card>
        <v-bottom-sheet v-model="sheet">
          <v-sheet class="text-center" height="800px">
            <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
          close
            </v-btn>
            <component :is='$props.projet1'>
            </component>
            <div class="py-3">
             This is a bottom sheet using the controlled by v-model instead of activator
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
  props: ['projet1', 'src', 'titleProjects']
})
</script>
