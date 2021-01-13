import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { i18n } from './utils/i18n'
import './utils/veevalidate'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://exmple.domin.com'

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
