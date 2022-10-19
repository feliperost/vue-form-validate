import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import CadastrosView from '../views/CadastrosView.vue'
import CepView from '../views/CepView.vue'



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
  },
  {
    path: '/cep',
    name: 'cep',
    component: CepView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
