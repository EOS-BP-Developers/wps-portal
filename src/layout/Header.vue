<template>
  <!--Nav Bar-->
  <b-navbar toggleable="md" type="light" variant="info" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">
      <img src="/static/img/main_logo.png" alt="EOS Worker Proposal">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item to="categories">Categories</b-nav-item>
        <b-nav-item to="projects">Projects</b-nav-item>
        <b-nav-item to="create">Create</b-nav-item>
        <b-nav-item to="signup-proposer">Proposer Signup</b-nav-item>
        <!--<b-nav-item v-if="canShowScatterButton()" @click="loginScatter">{{ $t('lang.scatter') }}</button>
        <b-nav-item v-if="!canShowScatterButton()" @click="logoutScatter">Logout</button>-->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click="push('search')">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ZH</b-dropdown-item>
          <b-dropdown-item href="#">KR</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em> Link Scatter </em>
          </template>
          <b-dropdown-item to="profile">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  components: {

  },
  data () {
    return {

    }
  },
  methods: {
    push (route) {
      this.$router.push(route)
    }
  }
  /*scatter: 'any'
  identity: 'any'
  network: 'any'
  account: 'any'
  login: () => void,
  logout: () => void,

  canShowScatterButton() {
    if (!this.scatter) return true;
    if (!this.identity) return true;
    if (!this.account) return true;
    return false;
  }

  async loginScatter() {
    // User does not have Scatter.
    if (!this.scatter) return this.$router.push("/help#setting-up-scatter");

    await this.login();
    if (!this.account || !await getAccount(this.account.name)) {
      (this as any).$toasted.error(
        "There was an issue finding this account on the network. Perhaps it doesn't exist on this chain.",
        {
          theme: "primary",
          position: "top-center",
          duration: 5000
        }
      );
      this.$router.push("/");
    }
  }

  async logoutScatter(){
    this.logout();
  }*/
}
</script>

<style>

</style>
