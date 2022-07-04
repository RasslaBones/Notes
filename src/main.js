import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "../src/assets/scss/style.scss";



createApp(App).use(store).use(router).mount('#app')


router.beforeEach((to, from, next) => {
    let auth = store.state.isAuth
    if( to.name == 'home' && auth == false){
        next('/login')
    }
    else next()
})

router.beforeEach((to,from,next)=>{
    let auth = store.state.isAuth
    if(to.name == 'login' && auth == true){
        next('/')
    } else next()
})