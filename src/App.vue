<template>
  <div id="app">
    <AppHeader></AppHeader>
    <b-container fluid id="main-wrapper">
      <transition name="fade">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </b-container>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './layout/Header.vue'
import AppFooter from './layout/Footer.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  created () {
    this.$store.dispatch('api/CONNECT_SCATTER')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main-wrapper {
  padding-top:50px;
  padding-left:0px;
  padding-right:0px;
  }
</style>
