import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    password: ''
  },
  mutations: {
    setComPass (state, value) {
      state.password = value
    }
  },
  actions: {
  },
  modules: {
  }
})
