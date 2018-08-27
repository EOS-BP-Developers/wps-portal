<template>
  <!--Nav Bar-->
  <b-navbar toggleable="md" type="light" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <!--Brand Logo-->
    <b-navbar-brand to="/#">
      <object width="100px" height="35px" data="/static/img/main_logo.svg" type="image/svg+xml" id="nav-logo">
        <img src="/static/img/main_logo.png" />
      </object>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <!-- Left elements -->
      <b-navbar-nav>
        <b-nav-item to="categories" class="mx-1">Categories</b-nav-item>
        <b-nav-item to="projects" class="mx-1">Projects</b-nav-item>
        <b-nav-item to="create" class="mx-1">Create</b-nav-item>
        <b-nav-item to="signup-proposer" class="mx-1">Proposer Signup</b-nav-item>
      </b-navbar-nav>

      <!-- Right elements -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item right v-if="!scatter" class="mx-2">
          Download Scatter
        </b-nav-item>
        <b-nav-item right v-if="scatter && !identity" @click="linkIdentity" class="mx-2">
          Link Scatter
        </b-nav-item>

        <b-nav-item-dropdown right v-if="scatter && identity" id="last-item" class="mx-2">
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em> {{ scatterAccount.name }} </em>
          </template>
          <b-dropdown-item to="profile">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="changeIdentity">Change Identity </b-dropdown-item>
          <b-dropdown-item href="#" @click="removeIdentity">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      <!-- Right aligned nav items -->
        <b-nav-item-dropdown :text="currentLang" right class="mx-2">
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

        <b-nav-form>
          <b-form-input class="mr-sm-2" type="text" placeholder="Search by project name"></b-form-input>
          <b-button variant="outline-success" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
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
/* Fix for not clickable brand item */
#nav-logo {
  position: relative;
  z-index: -1;
}

/* logo display bug, better solution tbf */
.navbar-brand {
  height: 44px;
}

</style>
