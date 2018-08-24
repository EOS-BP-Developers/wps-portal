<template>
  <!--Nav Bar-->
  <b-navbar toggleable="md" type="light" fixed="top" class="font-weight-normal">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/">
      <object width="100px" height="35px" data="/static/img/main_logo.svg" type="image/svg+xml">
        <img src="/static/img/main_logo.png" />
      </object>
    </b-navbar-brand>


    <b-collapse is-nav id="nav_collapse" >
      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" variant="primary" type="submit" @click="push('search')">Search</b-button>
      </b-nav-form>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="categories">Categories</b-nav-item>
        <b-nav-item to="projects">Projects</b-nav-item>
        <b-nav-item to="create">Create</b-nav-item>
        <b-nav-item to="signup-proposer">Proposer Signup</b-nav-item>

      <!-- Right aligned nav items -->
        <b-nav-item-dropdown :text="currentLang" right>
          <b-dropdown-item @click="changeLang('EN')">English</b-dropdown-item>
          <b-dropdown-item @click="changeLang('ES')">Español</b-dropdown-item>
          <b-dropdown-item @click="changeLang('KR')">한국어</b-dropdown-item>
          <b-dropdown-item @click="changeLang('CN')">中文</b-dropdown-item>
          <b-dropdown-item @click="changeLang('DE')">Deutsch</b-dropdown-item>
          <b-dropdown-item @click="changeLang('FR')">Français</b-dropdown-item>
          <b-dropdown-item @click="changeLang('JP')">日本語</b-dropdown-item>
          <b-dropdown-item @click="changeLang('RU')">Русский</b-dropdown-item>
          <b-dropdown-item @click="changeLang('NO')">Norsk</b-dropdown-item>
          <b-dropdown-item @click="changeLang('SE')">Svenska</b-dropdown-item>
          <b-dropdown-item @click="changeLang('AR')">العَرَبِيَّة‎</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item right v-if="!scatter">
          Download Scatter
        </b-nav-item>

        <b-nav-item right v-if="scatter && !identity" @click="linkIdentity">
          Link Scatter
        </b-nav-item>

        <b-nav-item-dropdown right v-if="scatter && identity">
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em> {{ scatterAccount.name }} </em>
          </template>
          <b-dropdown-item to="profile">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeIdentity">Change Identity </b-dropdown-item>
          <b-dropdown-item href="#" @click="removeIdentity">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'Header',
  components: {

  },
  data () {
    return {
      currentLang: 'EN'
    }
  },
  computed: {
    ...mapState({
      scatter: state => state.api.scatter,
      defaultNetwork: state => state.api.defaultNetwork
    }),
    ...mapGetters({
      identity: 'api/GET_SCATTER_IDENTITY',
      scatterAccount: 'api/GET_SCATTER_ACCOUNT'
    })
  },
  methods: {
    push (route) {
      this.$router.push(route)
    },
    changeLang (newLang) {
      this.currentLang = newLang
    },
    linkIdentity () {
      this.scatter.getIdentity({accounts: [ this.defaultNetwork ]}).then(identity => {
        console.log(identity)
        // this.updateAccount(this.scatterAccount.name)
      })
    },
    changeIdentity () {
      this.scatter.forgetIdentity().then(() => {
        this.linkIdentity()
      })
    },
    removeIdentity () {
      this.scatter.forgetIdentity()
    }
  }
}
</script>

<style>

</style>
