import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false

  },
  mutations: {
    setTokenMutation (state, token) {
      state.token = token

      if (token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUserMutation (state, user) {
      state.user = user
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setTokenMutation', token)
    },
    setUser ({ commit }, user) {
      commit('setUserMutation', user)
    }
  }
})
