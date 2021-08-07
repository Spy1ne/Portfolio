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
import Project100 from '@/components/projects-all-details/Project100.component.vue'
import Project120 from '@/components/projects-all-details/Project120.component.vue'
import Project130 from '@/components/projects-all-details/Project130.component.vue'
import Project140 from '@/components/projects-all-details/Project140.component.vue'
import Project150 from '@/components/projects-all-details/Project150.component.vue'
import Project160 from '@/components/projects-all-details/Project160.component.vue'

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
Vue.component('pf-Project100', Project100)
Vue.component('pf-Project120', Project120)
Vue.component('pf-Project130', Project130)
Vue.component('pf-Project140', Project140)
Vue.component('pf-Project150', Project150)
Vue.component('pf-Project160', Project160)

/* Component Text Anim */
Vue.component('pf-TextAnim', textAnimp)
