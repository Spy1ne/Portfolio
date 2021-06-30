<template>
    <v-container>
        <v-card-title class="justify-center mb-7 mt-4"><h1>{{$t('TitleAllProject')}}</h1></v-card-title>
        <v-row class="justify-center">
            <v-chip class="ma-2" color="success" outlined @click="filterTag =''"> All </v-chip>
            <v-chip class="ma-2" color="success" outlined @click="filterTag ='aa'"> aa </v-chip>
            <v-chip class="ma-2" color="success" outlined @click="filterTag ='test'"> test </v-chip>
        </v-row>
        <v-row class="justify-center">
            <v-col col="12" sm="6" :md="mdt" v-for="(item, i) in projects" v-bind:key="i">
                <pf-CardsProjects :project="item"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import i18n from '@/i18n'

export default Vue.extend({
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
