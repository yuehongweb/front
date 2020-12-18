import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "login" */ '@/views/Login.vue')
const Register = () => import(/* webpackChunkName: "register" */ '@/views/Register.vue')
const Forget = () => import(/* webpackChunkName: "forget" */ '@/views/Forget.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
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
