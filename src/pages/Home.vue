<template>
  <main role="main" style="padding-left:0px; padding-right:0px;">

    <!-- Page Title Jubotron -->
    <div class="jumbotron jumbotron-fluid">
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

    <!-- WPS statistics container -->
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
      <!-- End of Row  -->
      </div>
    <!-- End of Statistics container -->
    </div>

    <!-- Start Tabs Container -->
    <div class="container" style="margin-top:0.5em;">
      <!-- Start of Categories Tabs -->
      <b-tabs>
        <!-- Popular Projects Tab -->
        <b-tab title="Popular" active>

          <CategoryTabContent></CategoryTabContent>

        <!-- End of Popular Tab -->
        </b-tab>
        <!-- Community Tab -->
        <b-tab title="Community">

          <CategoryTabContent></CategoryTabContent>

        <!-- End of Community Tab -->
        </b-tab>
        <!-- Education tab Content -->
        <b-tab title="Education">

          <CategoryTabContent></CategoryTabContent>

        </b-tab>
        <b-tab title="Entertainment">

          <CategoryTabContent></CategoryTabContent>

        </b-tab>
        <b-tab title="Games">

          <CategoryTabContent></CategoryTabContent>

        </b-tab>
        <b-tab title="Other">

          <CategoryTabContent></CategoryTabContent>

        </b-tab>
      </b-tabs>

      <!-- Load more Button -->
      <div class="container" style="margin-top:1em; margin-bottom:1em;">
        <div class="row">
          <div class="col-md-12">
            <button type="button" class="btn btn-secondary">Show more</button>
          </div>
        </div>
      </div>

    <!-- End of Categories tabs content -->
    </div>

  </main>

</template>

<script>
import CategoryTabContent from '../components/CategoryTabContent.vue'

export default {
  name: 'Home',
  components: {
    CategoryTabContent
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
