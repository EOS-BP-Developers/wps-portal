<template>
  <main role="main">
  <div class="jumbotron">
    <div class="container">
        <h1 class="display-6">
          {{ page }}
        </h1>
        <p>
        {{ subtitle }}
        </p>
    </div>
  <!-- End of jumbotron -->
  </div>

  <div class="container" style="margin-bottom:1em; margin-top:1em;">
    <div class="row">
      <div class="col-xl-12">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">Popular</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Arcade</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tabletop</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PC Games</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mobile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Other</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container" style="margin-bottom:1em;">
    <div class="row">
      <div class="col-xl-12">
        <ul class="nav nav-tabs justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" href="#">Hot</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Latest</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>
      <ProjectCard></ProjectCard>

    </div>
  </div>

  <div class="container" style="margin-top:1em; margin-bottom:1em;">
    <div class="row">
      <div class="col-md-12">
        <button type="button" class="btn btn-secondary">Show more</button>
      </div>
    </div>
  </div>

  </main>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'

export default {
  name: 'Category',
  components: {
    ProjectCard
  },
  data () {
    return {
      page: 'Category Name',
      subtitle: 'Explore the promising game development projects which need your support'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
