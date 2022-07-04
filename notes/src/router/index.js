import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import("../views/Home"),
    name: 'home',
    
  },
  {
    path: '/login',
    component: () => import("../views/Login"),
    name: 'login'
  },
  {
    path: '/signup',
    component: () => import("../views/SignUp"),
    name: 'signup'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    let auth = JSON.parse(localStorage.getItem('auth'))
    if( to.name == 'home' && auth.isAuth == false){
      next('/login')
    }
    else{
      next()
    }
  }
)
export default router
