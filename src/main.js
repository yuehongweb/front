import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { i18n } from './utils/i18n'
import './utils/veevalidate'
import alert from './components/modules/alert/index.js'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://exmple.domin.com'
// alert设置为全局插件 直接挂载到原型上
Vue.use(alert)
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
