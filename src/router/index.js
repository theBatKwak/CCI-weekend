import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import CinemaView from '../views/CinemaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'home',
      component: ShopView
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: CinemaView
    }
  ]
})

export default router
