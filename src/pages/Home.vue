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

    <div class="container">
      <div class="row">
        <div class="col-md-3 border">
          <h2 style="margin-top:0.5em;">{{ statistic_total_voters }}</h2>
          <p>Total Voters</p>
        </div>
        <div class="col-md-3 border">
          <h2 style="margin-top:0.5em;">{{ statistic_total_projects }}</h2>
          <p>Total Projects</p>
        </div>
        <div class="col-md-3 border">
          <h2 style="margin-top:0.5em;">{{ statistic_funded_projects }}</h2>
          <p>Total Funded Projects</p>
        </div>
        <div class="col-md-3 border">
          <h2 style="margin-top:0.5em;">{{ statistic_ongoing_projects }}</h2>
          <p>Ongoing Projects</p>
        </div>
      <!-- End of Row Container -->
      </div>
    <!-- End of Statistics container -->
    </div>

    <div class="container" style="margin-bottom:1em; margin-top:1em;">
      <div class="row">
        <div class="col-xl-12">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="#">Popular</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Community</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Education</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Entertainment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Games</a>
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
  name: 'Home',
  components: {
    ProjectCard
  },
  data () {
    return {
      page: 'Welcome to the WPS voting Portal',
      subtitle: 'A place to fund innovation on the EOS blockchain',
      statistic_total_voters: '183,434',
      statistic_total_projects: '143,432',
      statistic_funded_projects: '734,345',
      statistic_ongoing_projects: '235,289'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
