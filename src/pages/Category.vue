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

                <b-card-group deck class="mb-3">
                    
                    <div class="row">
                      <div class="col-4" v-if="item.category === 'Popular'" v-for="item in projects">

                        <!-- Project Card -->
                        <b-card   no-body
                                  v-bind:img-src="item.image"
                                  img-alt="Image"
                                  img-top
                                  tag="div"
                                  style="max-width: 20rem;"
                                  class="mb-2"
                                  >
                          <h4 slot="header">{{ item.name }}</h4>
                          <b-card-body>
                            <p class="d-inline text-success">{{ item.status }}</p>
                            <span class="badge badge-secondary">{{ item.category }}</span>
                            <p class="d-inline text-info">{{ item.count }} votes</p>                        
                            <p class="card-text mt-3">
                              {{ item.description }}
                            </p>
                          </b-card-body>
                          <b-card-footer>
                            <button type="button" class="btn btn-secondary">View</button>
                          </b-card-footer>                    
                        </b-card>

                      </div>
                    </div>   

                  </b-card-group>


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
