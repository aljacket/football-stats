import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/Home.vue'
import InformationMatch from '@/InformationMatch.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'InfoMatch',
    component: InformationMatch
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
