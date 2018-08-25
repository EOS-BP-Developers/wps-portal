import ScatterJS from 'scatter-js/dist/scatter.esm'
import EOS from 'eosjs'
import API from '../../../api'
import { local } from './endpoints'

// Start API as jungle with jungle account
const api = new API(EOS(local), 'eosio.wps')

export default {
  namespaced: true,

  state: {
    scatter: null,
    defaultNetwork: local
  },

  actions: {
    async CONNECT_SCATTER ({ commit }) {
      ScatterJS.scatter.connect('wps').then(connected => {
        if (connected) {
          commit('CONNECT_SCATTER', ScatterJS.scatter)
          window.scatter = null
        }
      })
    }
  },

  mutations: {
    CONNECT_SCATTER (state, scatter) {
      state.scatter = scatter
    }
  },

  getters: {
    GET_SCATTER_ACCOUNT: (state) => {
      return state.scatter && state.scatter.identity
        ? state.scatter.identity.accounts[0]
        : null
    },

    GET_SCATTER_IDENTITY: (state) => {
      return state.scatter
        ? state.scatter.identity
        : null
    },

    GET_API: () => api
  }
}
