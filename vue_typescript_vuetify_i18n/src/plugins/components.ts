import Vue from 'vue'

/* select locale */
import HeaderComponent from '@/components/header/TheHeader.component.vue'
import SelectLocale from '@/components/select-locale/TheSelectLocale.component.vue'

Vue.component('pf-header', HeaderComponent)
Vue.component('pf-locale', SelectLocale)
