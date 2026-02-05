import { createRouter, createWebHistory } from 'vue-router'
import ArticleLayout from '../layouts/ArticleLayout.vue'

// Pages
import Home from '../pages/Index.vue'

// Markdown pages (text-heavy docs)
import Installation from '../pages/Installation.vue'
import ContributionGuide from '../pages/ContributionGuide.vue'
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
  { path: '/', component: Home, meta: { standalone: true } },
  { path: '/installation', component: Installation, meta: { layout: ArticleLayout } },
  { path: '/contribution-guide', component: ContributionGuide, meta: { layout: ArticleLayout } },
  { path: '/basics', component: Basics, meta: { layout: ArticleLayout } },
  { path: '/api', component: Api, meta: { layout: ArticleLayout } },
  { path: '/grid', component: Grid, meta: { layout: ArticleLayout } },
  { path: '/section', component: Section, meta: { layout: ArticleLayout } },
  { path: '/select', component: Select, meta: { layout: ArticleLayout } },
  { path: '/visibility', component: Visibility, meta: { layout: ArticleLayout } },
  { path: '/reactivity', component: Reactivity, meta: { layout: ArticleLayout } },
  { path: '/actions', component: Actions, meta: { layout: ArticleLayout } },
  { path: '/states', component: States, meta: { layout: ArticleLayout } },
  { path: '/custom', component: Custom, meta: { layout: ArticleLayout } },
  { path: '/precognition', component: Precognition, meta: { layout: ArticleLayout } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: '!font-bold',
  routes,
})

export default router
