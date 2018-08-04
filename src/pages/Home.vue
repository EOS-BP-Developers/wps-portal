<template>
  <main role="main" style="padding-left:0px; padding-right:0px;">

    <!-- Page Title Jubotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
          <h1 class="display-6">
            {{ title }}
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
        <div class="col-md-3 border" v-for="(value, key) in statistics">
          <h2 style="margin-top:0.5em;">{{ value }}</h2>
          <p>{{ key }}</p>
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

          <b-card no-body>
            <b-tabs card>

              <!-- Hot Tab - Most voted projects on top -->
              <b-tab title="Hot" active>

                <!-- Projects cards container -->
                <div class="container">
                  <div class="row">


                    <!-- Card column -->
                    <div class="col-md-6 border" v-if="item.category === 'Popular'" v-for="item in projects" style="margin-top:1em;">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-6">
                            <img v-bind:src="item.image">
                          </div>
                          <div class="col-md-6">
                            <div class="container fluid">
                              <div class="row">
                                <div class="col-md-6" style="margin-top:0.5em;">
                                  <p style="color:green;"> {{ item.status }} </p>
                                </div>
                                <div class="col-md-6" style="margin-top:0.5em;">
                                  <p> {{ item.count }} </p>
                                </div>
                              </div>
                            </div>

                            <h2>{{ item.name }}</h2>
                            <p>{{ item.description }}</p>

                            <div class="container fluid">
                              <div class="row">
                                <div class="col-md-6">
                                  <p>{{ item.votes }}</p>
                                </div>
                                <div class="col-md-6">
                                  <span class="badge badge-secondary">{{ item.category }}</span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    <!-- End of card column -->
                    </div>

                  <!-- End or Row -->
                  </div>
                </div>

              <!-- Latest Tab - Most Recent projects on top -->
              </b-tab>
              <b-tab title="Latest">

                <div class="container">
                  <div class="row">

                    <!-- Need same cards ordered by date -->

                  </div>
                </div>

              </b-tab>
            </b-tabs>
          </b-card>

        <!-- End of Popular Tab -->
        </b-tab>
        <!-- Community Tab -->
        <b-tab title="Community">

          <b-card no-body>
            <b-tabs card>

              <!-- Hot Tab - Most voted projects on top -->
              <b-tab title="Hot" active>

                <!-- Projects cards container -->
                <div class="container">
                  <div class="row">

                    <!-- Card column -->
                    <div class="col-md-6 border" v-if="item.category === 'Community'" v-for="item in projects">
                      <div class="container">
                        <div class="row">
                          <div class="col-md-6">
                            <img v-bind:src="item.image">
                          </div>
                          <div class="col-md-6">
                            <div class="container fluid">
                              <div class="row" style="margin-top:1em;">
                                <div class="col-md-6">
                                  <p style="color:green;"> {{ item.status }} </p>
                                </div>
                                <div class="col-md-6">
                                  <p> {{ item.count }} </p>
                                </div>
                              </div>
                            </div>

                            <h2>{{ item.name }}</h2>
                            <p>{{ item.description }}</p>

                            <div class="container fluid">
                              <div class="row">
                                <div class="col-md-6">
                                  <p>{{ item.votes }}</p>
                                </div>
                                <div class="col-md-6">
                                  <span class="badge badge-secondary">{{ item.category }}</span>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    <!-- End of card column -->
                    </div>

                  <!-- End or Row -->
                  </div>
                </div>

              <!-- Latest Tab - Most Recent projects on top -->
              </b-tab>
              <b-tab title="Latest">

                <div class="container">
                  <div class="row">

                    <!-- Need same cards ordered by date -->

                  </div>
                </div>

              </b-tab>
            </b-tabs>
          </b-card>

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
      title: 'Welcome to the WPS voting Portal',
      subtitle: 'A place to fund innovation on the EOS blockchain',
      statistics: {
        'Total Voters': '183,434',
        'Total Projects': '143,432',
        'Funded Projects': '734,345',
        'Ongoing Projects': '235,289'
      },
      projects: [
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '12', name: 'Warhammer', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '10', name: 'Red Alert', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '19', name: 'GTA', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '4', name: 'Diablo', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '19', name: 'Sim City', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '10', name: 'Red Alert', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '19', name: 'GTA', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '4', name: 'Diablo', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '19', name: 'Sim City', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '19', name: 'GTA', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '13', name: 'Project Name', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '19', name: 'GTA', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' }
      ],
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
