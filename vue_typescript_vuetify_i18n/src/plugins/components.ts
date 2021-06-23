import Vue from 'vue'

/* select locale */
import HeaderComponent from '@/components/header/TheHeader.component.vue'
import SelectLocale from '@/components/select-locale/TheSelectLocale.component.vue'
import FooterComponent from '@/components/footers/basdepage.component.vue'
import ProjectBottom from '@/components/ProjectBottomSheet/ProjectBottom.component.vue'
import CardsProjects from '@/components/cards-projects/CardsProjects.component.vue'
import HomeCover from '@/components/home-cover/HomeCover.component.vue'

Vue.component('pf-header', HeaderComponent)
Vue.component('pf-locale', SelectLocale)
Vue.component('pf-Footer', FooterComponent)
Vue.component('pf-Project', ProjectBottom)
Vue.component('pf-CardsProjects', CardsProjects)
Vue.component('pf-HomeCover', HomeCover)
