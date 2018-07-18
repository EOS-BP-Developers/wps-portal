<template>
<!--Nav Bar-->
<div class="ui grid">
  <!--Computer Menu-->
  <div class="computer tablet only row">
    <!--Fixed Menu-->
    <div class="ui top fixed secondary pointing menu" id="navbar">
      <div class="ui container">
        <router-link to="/" class="item" tag="a" active-class="active" exact @click="select(item)" id="tab">
          <img src="/static/img/bloks_logomark.png" id="logo"> Bloks.io
        </router-link>
        <router-link to="/blocks" class="item" tag="a" active-class="active" @click="select(item)" id="tab">
          Blocks
        </router-link>
        <router-link to="/transactions" class="item" tag="a" active-class="active" @click="select(item)" id="tab">
          Transactions
        </router-link>
        <router-link to="/accounts" class="item" tag="a" active-class="active" @click="select(item)" id="tab">
          Accounts
        </router-link>
        <router-link to="/tokens" class="item" tag="a" active-class="active" @click="select(item)" id="tab">
          Tokens
        </router-link>
        <router-link to="/producers" class="item" tag="a" active-class="active" @click="select(item)" id="tab">
          Producers
        </router-link>
        <div class="right item">
          <div class="ui action input">
            <input type="text" v-model="query" @keyup.enter="search" placeholder="Block # / Account / Public Key / TX">
            <button @click="search" class="ui blue right labeled icon button search-button">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--Mobile Menu-->
    </div>
      <div class="mobile only row ui top fixed menu">
        <sui-menu :widths="2">
          <sui-menu-item onclick="location.href='/';" style="cursor: pointer;">
              <img src="/static/img/bloks_logomark.png" id="logo">  Bloks.io
          </sui-menu-item>
          <sui-menu-item id="mobile-menu"
            <sui-dropdown
              button
              item
              text="Menu"
            >
              <sui-dropdown-menu>
                <sui-dropdown-item>
                  <router-link to="/blocks" class="item">
                  Blocks
                  </router-link>
                </sui-dropdown-item>
                <sui-dropdown-item>
                  <router-link to="/transactions" class="item">
                  Transactions
                  </router-link>
                </sui-dropdown-item>
                <sui-dropdown-item>
                  <router-link to="/accounts" class="item">
                  Accounts
                  </router-link>
                </sui-dropdown-item>
                <sui-dropdown-item>
                  <router-link to="/tokens" class="item">
                  Tokens
                  </router-link>
                </sui-dropdown-item>
                <sui-dropdown-item>
                  <router-link to="/producers" class="item">
                  Producers
                  </router-link>
                </sui-dropdown-item>
              </sui-dropdown-menu>
            </sui-dropdown>
          </sui-menu-item>
        </sui-menu>

        <!--End of Mobile Menu-->
        <div class="ui action input" id="mobile-search">
          <input type="text" v-model="query" @keyup.enter="search" placeholder="Block # / Account / Public Key / TX" style="border-radius:0;">
          <button @click="search" class="ui blue right labeled icon button search-button" style="border-radius:0;">
            Search
          </button>
        </div>
      </div>
    <!--End of grid-->
    </div>
</template>

<script>
import EOS from 'eosjs'
import { config } from '../config'
const eos = EOS(config)

export default {
  name: 'Header',
  components: {},
  data () {
    return {
      query: null
    }
  },
  methods: {
    // Thank you to Cesar for brilliant code in eostracker.io
    search () {
      let query = this.query.trim()
      let queryInt = Number(query)

      if (!isNaN(queryInt)) {
        this.$router.push({ path: `/block/${query}` })
      } else if (query.length === 64) {
        eos.getTransaction(query).then(transaction => {
          if (transaction) {
            this.$router.push({ path: `/transaction/${query}` })
          } else {
            this.$router.push({ path: `/block/${query}` })
          }
        })
      } else if (query.length === 53) {
        this.$router.push({ path: `/key/${query}` })
      } else {
        this.$router.push({ path: `/account/${query}` })
      }
    }
  }
}
</script>

<style>
/* menu with dropdown inside */
#mobile-menu {
    padding-top: 0px;
    padding-bottom: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
  }

@media (max-width: 923px){
  .ui.menu .item>.input input {
  width: 110px;
  }

}@media (min-width: 992px){
  .ui.menu .item>.input input {
  width: 300px;
  }
}

@media (min-width: 1015px){
  .ui.menu .item>.input input {
  width: 300px;
  }
}

@media (min-width: 1200px){
  .ui.menu .item>.input input {
    width: 400px;
  }
}

#mobile-search {
  width:100%;
}
</style>
