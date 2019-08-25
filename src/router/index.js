import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Cuowu from '@/views/404'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/',
      component: Home,
      children: [

        { path: '/', name: 'welcome', component: Welcome }
      ]
    },
    { path: '*', component: Cuowu }
  ]
})

export default router
