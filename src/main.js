import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './local/index'
Vue.config.productionTip = false
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://exmple.domin.com'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
