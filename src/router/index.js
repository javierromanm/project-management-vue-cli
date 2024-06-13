import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientsIndex from '@/components/Clients/ClientsIndex.vue'
import LoginUser from '@/components/LoginUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginUser
  },
  {
    path: '/clients',
    name: 'clients.index',
    component: ClientsIndex
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
