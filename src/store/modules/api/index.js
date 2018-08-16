import ScatterJS from 'scatter-js/dist/scatter.esm'
import EOS from 'eosjs'
import API from '../../../api'
import { jungle } from './endpoints'

// Start API as jungle with jungle account
const api = new API(EOS(jungle), 'wpswpswpswps')

export default {
  namespaced: true,

  state: {
    scatter: null,
    eos: null,
    defaultNetwork: jungle
  },

  actions: {
    async CONNECT_SCATTER ({ commit }) {
      ScatterJS.scatter.connect('wps').then(connected => {
        if (connected) {
          commit('CONNECT_SCATTER', ScatterJS.scatter)
          window.scatter = null
        }
      })
    },

    async INITIALIZE_EOS ({ commit, state }) {
      commit('INITIALIZE_EOS', EOS(state.defaultNetwork))
    }
  },

  mutations: {
    CONNECT_SCATTER (state, scatter) {
      state.scatter = scatter
    },

    INITIALIZE_EOS (state, eos) {
      state.eos = eos
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

    GET_API: () => {
      return api
    }
  }
}
