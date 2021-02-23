import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    password: '',
    sid: ''
  },
  mutations: {
    setComPass (state, value) {
      state.password = value
    },
    setSid (state, value) {
      state.sid = value
    }
  },
  actions: {
  },
  modules: {
  }
})
