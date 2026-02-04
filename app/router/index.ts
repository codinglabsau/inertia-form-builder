import { createRouter, createWebHistory } from 'vue-router'

// Markdown pages (text-heavy docs)
import Home from '../pages/index.md'
import Installation from '../pages/installation.md'
import ContributionGuide from '../pages/contribution-guide.md'
import Precognition from '../pages/precognition.md'

// Vue pages (interactive demos)
import Basics from '../pages/Basics.vue'
import FullExample from '../pages/FullExample.vue'
import Grid from '../pages/Grid.vue'
import Section from '../pages/Section.vue'
import Select from '../pages/Select.vue'
import Visibility from '../pages/Visibility.vue'
import Actions from '../pages/Actions.vue'
import States from '../pages/States.vue'
import Custom from '../pages/Custom.vue'
import Reactivity from '../pages/Reactivity.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/installation', component: Installation },
  { path: '/contribution-guide', component: ContributionGuide },
  { path: '/basics', component: Basics },
  { path: '/full-example', component: FullExample },
  { path: '/grid', component: Grid },
  { path: '/section', component: Section },
  { path: '/select', component: Select },
  { path: '/visibility', component: Visibility },
  { path: '/reactivity', component: Reactivity },
  { path: '/actions', component: Actions },
  { path: '/states', component: States },
  { path: '/custom', component: Custom },
  { path: '/precognition', component: Precognition },
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: '!font-bold',
  routes,
})

export default router
