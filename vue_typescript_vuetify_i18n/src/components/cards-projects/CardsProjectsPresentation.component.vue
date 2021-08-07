<template>
    <v-container>
        <v-card-title class="justify-center mb-7 mt-4"><h1 class="gradient-text">{{$t('TitleAllProject')}}</h1></v-card-title>
        <v-row class="justify-center">
            <v-chip class="ma-2" outlined @click="filterTag =''"> All </v-chip>
            <v-chip class="ma-2" outlined @click="filterTag ='aa'"> aa </v-chip>
            <v-chip class="ma-2" outlined @click="filterTag ='test'"> test </v-chip>
        </v-row>
        <v-row class="justify-center">
            <v-col cols="12" sm="6" :md="mdt" v-for="(item, i) in projects" v-bind:key="i">
                <pf-CardsProjects :project="item"/>
            </v-col>
        </v-row>
        <div class="mb-15"/>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '@/i18n'

export default Vue.extend({
  name: 'titlep',
  data: () => ({
    sheet: false,
    show: false,
    mdt: 'auto',
    lgt: '4',
    filterTag: ''
  }),
  computed: {
    projects: function () {
      const _ps = JSON.stringify(i18n.t('Projects'))
      const _projects = JSON.parse(_ps) as Array<any>
      const _projectss = Array<any>()

      for (const project in _projects) {
        _projectss.push(_projects[project])
      }

      return _projectss.filter((p:any) => p.tag === this.filterTag || this.filterTag === '')
    }
  }
})
</script>
<style>
.gradient-text {
  font-family:'Consolas';
  height: 40px;
  background-color: #f3ec78;
  background-image: linear-gradient(360deg, #cf9b58, #b88f59);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
