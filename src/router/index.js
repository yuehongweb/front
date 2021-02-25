import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
const Register = () => import(/* webpackChunkName: "register" */ '@/views/Register.vue')
const Forget = () => import(/* webpackChunkName: "forget" */ '@/views/Forget.vue')
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      console.log(from, 'from')
      if (from.name === 'login') {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  }
]

const router = new VueRouter({
  routes
})

export default router
