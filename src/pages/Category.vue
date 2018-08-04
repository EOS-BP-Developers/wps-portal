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
      <b-tab title="Community" >

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
  name: 'Category',
  components: {
    CategoryTabContent
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
