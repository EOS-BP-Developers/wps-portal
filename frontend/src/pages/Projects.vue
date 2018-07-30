<template>
  <div>
    <h1 style="padding-top:330px;padding-bottom:330px;">
      {{ page }}
      <router-link to="project">
        (Project)
      </router-link>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      page: 'Projects'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
