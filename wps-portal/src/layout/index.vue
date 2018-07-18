<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="wrapper">
      <transition name="fade">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
    <AppFooter></AppFooter>
  </div>

</template>

<script>
  import AppHeader from './Header.vue'
  import AppFooter from './Footer.vue'

  export default {
    name: 'AppLayout',
    components: {
      AppHeader,
      AppFooter
    }
  }
</script>

<style>
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.wrapper {
  flex: 1;
}
</style>
