import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import CadastrosView from '../views/CadastrosView.vue'


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
    path: '/cadastros',
    name: 'cadastros',
    component: CadastrosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
