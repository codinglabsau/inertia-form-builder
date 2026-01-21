import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/Index.vue'

const routes = [{ path: '', component: Index }]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: '!font-bold',
  routes,
})

export default router
