import { createRouter, createWebHistory } from 'vue-router'
import ArticleLayout from '../layouts/ArticleLayout.vue'

// Pages
import Home from '../pages/Index.vue'

// Markdown pages (text-heavy docs)
import Installation from '../pages/Installation.vue'
import ContributionGuide from '../pages/ContributionGuide.vue'
import UpgradeGuide from '../pages/UpgradeGuide.vue'
import Precognition from '../pages/Precognition.vue'

// Vue pages (interactive demos)
import Basics from '../pages/Basics.vue'
import Api from '../pages/Api.vue'
import Grid from '../pages/Grid.vue'
import Section from '../pages/Section.vue'
import Select from '../pages/Select.vue'
import Visibility from '../pages/Visibility.vue'
import Actions from '../pages/Actions.vue'
import States from '../pages/States.vue'
import Custom from '../pages/Custom.vue'
import Reactivity from '../pages/Reactivity.vue'

const routes = [
  { path: '/', component: Home, meta: { standalone: true, title: 'Inertia Form Builder' } },
  { path: '/installation', component: Installation, meta: { layout: ArticleLayout, title: 'Installation' } },
  { path: '/upgrade-guide', component: UpgradeGuide, meta: { layout: ArticleLayout, title: 'Upgrade Guide' } },
  { path: '/contribution-guide', component: ContributionGuide, meta: { layout: ArticleLayout, title: 'Contribution Guide' } },
  { path: '/basics', component: Basics, meta: { layout: ArticleLayout, title: 'The Basics' } },
  { path: '/api', component: Api, meta: { layout: ArticleLayout, title: 'API' } },
  { path: '/grid', component: Grid, meta: { layout: ArticleLayout, title: 'Grid' } },
  { path: '/section', component: Section, meta: { layout: ArticleLayout, title: 'Section' } },
  { path: '/select', component: Select, meta: { layout: ArticleLayout, title: 'Select & Checkboxes' } },
  { path: '/visibility', component: Visibility, meta: { layout: ArticleLayout, title: 'Visibility' } },
  { path: '/reactivity', component: Reactivity, meta: { layout: ArticleLayout, title: 'Reactivity' } },
  { path: '/actions', component: Actions, meta: { layout: ArticleLayout, title: 'Actions' } },
  { path: '/states', component: States, meta: { layout: ArticleLayout, title: 'States' } },
  { path: '/custom', component: Custom, meta: { layout: ArticleLayout, title: 'Custom Components' } },
  { path: '/precognition', component: Precognition, meta: { layout: ArticleLayout, title: 'Precognition' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: '!font-bold',
  routes,
})

router.afterEach((to) => {
  const title = to.meta.title as string | undefined
  document.title = title ? `${title} | Inertia Form Builder` : 'Inertia Form Builder'
})

export default router
