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
                      <div class="col-md-4" v-if="item.category === 'Popular'" v-for="item in computedNumbers" :key="item.name">

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
                            <p class="d-inline text-info">{{ item.votes }} votes</p>
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
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Warhammer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '432', category: 'Popular' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Red Alert', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '345', category: 'Popular' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '256', category: 'Community' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Diablo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '846', category: 'Popular' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Sim City', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '176', category: 'Community' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Red Alert', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '431', category: 'Popular' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '112', category: 'Community' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Diablo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '543', category: 'Popular' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Sim City', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '165', category: 'Community' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '143', category: 'Community' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Pod', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '431', category: 'Popular' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '943', category: 'Community' }
      ]
    }
  },
  computed: {
    computedNumbers () {
      let projects = this.projects
      return projects.sort((a, b) => Number(b.votes) - Number(a.votes))
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
