import Vue from 'vue'

/* select locale */
import HeaderComponent from '@/components/header/TheHeader.component.vue'
import SelectLocale from '@/components/select-locale/TheSelectLocale.component.vue'
import FooterComponent from '@/components/footers/basdepage.component.vue'
import ProjectBottom from '@/components/ProjectBottomSheet/ProjectBottom.component.vue'

/* Import Projet */
import CardsProjects from '@/components/cards-projects/CardsProjects.component.vue'
import CardsProjectsPresentation from '@/components/cards-projects/CardsProjectsPresentation.component.vue'
import CardsProjectsSlide from '@/components/cards-projects/CardsProjectsSlide.component.vue'

import HomeCover from '@/components/home-cover/HomeCover.component.vue'
import PresentationHomePage from '@/components/presentation-home-page/PresentationHomePage.component.vue'

/* Import Projet Sheet */
import Project1 from '@/components/projects-all-details/Project1.component.vue'

/* Import Text Anim */
import textAnimp from '@/components/textAnimp/TextAnim.component.vue'

Vue.component('pf-header', HeaderComponent)
Vue.component('pf-locale', SelectLocale)
Vue.component('pf-Footer', FooterComponent)
Vue.component('pf-Project', ProjectBottom)

/* Component Projet Sheet */
Vue.component('pf-CardsProjects', CardsProjects)
Vue.component('pf-CardsProjectsPresentation', CardsProjectsPresentation)
Vue.component('pf-CardsProjectsSlide', CardsProjectsSlide)

Vue.component('pf-HomeCover', HomeCover)
Vue.component('pf-PresentationHomePage', PresentationHomePage)

/* Component Projet Sheet */
Vue.component('pf-Project1', Project1)

/* Component Text Anim */
Vue.component('pf-TextAnim', textAnimp)
