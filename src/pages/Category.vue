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
  <div class="container mt-2">
    <!-- Start of Categories Tabs -->
          <b-card no-body>
            <b-tabs card>

              <!-- Hot Tab - Most voted projects on top -->
              <b-tab title="Hot" active>

                <!-- Projects cards container -->
                <div class="container">
                  <div class="row">
                    
                    <!-- Card column -->
                    <div class="col-md-6 border mt-2" v-if="item.category === 'Popular'" v-for="item in projects">
                      <div class="container">
                        <div class="row" >
                          <div class="col-md-6">
                            <img v-bind:src="item.image">
                          </div>
                          <div class="col-md-6">
                            <div class="container fluid">
                              <div class="row">
                                <div class="col-md-6 mt-2">
                                  <p class="text-success"> {{ item.status }} </p>
                                </div>
                                <div class="col-md-6 mt-2">
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

    <!-- Load more Button -->
    <div class="container my-2">
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
      subtitle: 'Explore the promising game development projects which need your support',
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
