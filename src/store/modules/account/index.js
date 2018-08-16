export default {
  namespaced: true,

  state: {
    account: null,
    error: null
  },

  actions: {
    async SET_ACCOUNT ({ commit, rootGetters }, name) {
      commit('SET_ERROR', null)
      commit('SET_ACCOUNT', null)
    }
  },

  mutations: {
    SET_ERROR (state, error) {
      state.error = error
      state.loadingAccount = false
    },
    SET_ACCOUNT (state, account) {
      state.account = account
      state.loadingAccount = false
    }
  },

  getters: {

  }
}
