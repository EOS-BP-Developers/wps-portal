// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Eos from 'eosjs'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

document.addEventListener('scatterLoaded', scatterExtension => {
  window.scatter.requireVersion(4.0)
  const scatter = window.scatter
  //  store.dispatch('setScatter', window.scatter)
  //  window.scatter = null
  //  const network = {host: '159.65.161.242', port: 8888}
  const eosOptions = {}

  //  const eos = scatter.eos(Eos.Localnet, network, eosOptions)

  let getIdentity = () => {
    scatter.getIdentity(['account']).then(identity => {
      console.log(identity, 'identitySuccess')
      window.identity = identity
    }).catch(error => {
      console.log(error, 'identityCrisis')
    })
  }

  getIdentity()
})
