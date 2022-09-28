import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import UsersView from '../views/UsersView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: FormView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/users',
    name: 'user',
    component: UsersView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
