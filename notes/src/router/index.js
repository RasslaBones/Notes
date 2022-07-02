import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import("../views/Login"),
    name: 'login'
  },
  {
    path: '/home',
    component: () => import("../views/Home"),
    name: 'home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
