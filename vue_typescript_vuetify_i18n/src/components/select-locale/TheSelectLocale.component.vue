<template>
  <div class="text-center">
    <v-menu open-on-hover bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn  v-bind="attrs" v-on="on"><v-icon aria-hidden="false" color="#a55fab">mdi-translate</v-icon> </v-btn>
      </template>
      <v-list color="dark"  >
        <v-list-item v-for="locale in locales" :key="locale.code">
          <v-list-item-title><v-btn  outlined color="#0e8486" dark @click="switchLanguage(locale.code)">{{ locale.name }}</v-btn></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script lang="ts">
import { getSupportedLocales } from '@/utils/i18n/supported-locales'
import i18n from '@/i18n'
import Vue from 'vue'

export default Vue.extend({
  data: () => ({ locales: getSupportedLocales() }),
  methods: {
    switchLanguage: function (code:string): void {
      i18n.locale = code
    }
  }
})
</script>

<style>
</style>
