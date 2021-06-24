<template>
  <v-container>
    <v-hover v-slot="{ hover }">
      <a @click="sheet = !sheet">
        <v-card :elevation="hover ? 16 : 2" height="350" max-width="350">
          <v-img :src="$props.src" height="250px">
            <span class="text-h5 pl-4 pt-4 d-inline-block">{{$props.titleProjects}}</span>
          </v-img>

          <v-card-title> {{$props.titleProjects}} </v-card-title>

          <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

          <v-expand-transition>
            <div v-show="show">>
              <v-card-text>
                I'm a thing. But, like most politicians, he promised more than he
                could deliver. You won't have time for sleeping, soldier, not with all
                the bed making you'll be doing. Then we'll go with that data file!
                Hey, you add a one and two zeros to that or we walk! You're going to
                do his laundry? I've got to find a way to escape.
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>

        <v-bottom-sheet v-model="sheet">
          <v-sheet class="text-center" height="800px">
            <v-btn class="mt-6" text color="red" @click="sheet = !sheet">
          close
            </v-btn>
            <component :is='$props.azert'>
            </component>
            <div class="py-3">
             This is a bottom sheet using the controlled by v-model instead of activator
            </div>
          </v-sheet>
       </v-bottom-sheet>

      </a>
    </v-hover>
  </v-container>
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
  props: ['azert', 'src', 'titleProjects']
})
</script>
