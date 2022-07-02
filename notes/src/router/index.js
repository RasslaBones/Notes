import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import("../views/Login.vue"),
    name: 'login'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
