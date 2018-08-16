<template>
  <main role="main">
    <div class="jumbotron">
      <div class="container">
        <h1 class="display-6 text-upper">
          {{ page }}
        </h1>
      </div>
      <!-- End of jumbotron -->
    </div>

    <!-- Start Tabs Container -->
    <div class="container my-3">
      <!-- Start of Categories Tabs -->
      <b-card no-body>
        <b-tabs card>

          <!-- Pending Tab -->
          <b-tab title="Pending" active>

            <!-- Projects cards container -->
            <div class="container">
              <div class="row">

                <!-- Card column -->
                <div class="col-md-6" v-if="item.status === 'Pending Review'" v-for="item in projects" style="margin-top:1em;" :key="item.name">
                  <b-card no-body
                          v-bind:img-src="item.image"
                          img-alt="Image"
                          img-top
                          tag="div"
                          class="mb-2">
                    <h4 slot="header">{{ item.name }}</h4>
                    <b-card-body>
                      <p class="d-inline text-secondary">{{ item.status }}</p>
                      <p class="d-inline text-secondary">{{ item.duration }} days</p>
                      <p class="card-text mt-3">
                        {{ item.description }}
                      </p>
                      <p class="d-inline text-secondary"><span class="text-info">{{ item.votes }}</span> Votes</p>
                      <span class="badge badge-secondary">{{ item.category }}</span>
                    </b-card-body>
                  </b-card>
                  <!-- End of card column -->
                </div>

                <!-- End or Row -->
              </div>
            </div>

            <!-- Load more Button -->
            <div class="container" style="margin-top:1em; margin-bottom:1em;">
              <div class="row">
                <div class="col-md-12">
                  <button type="button" class="btn btn-secondary">Show more</button>
                </div>
              </div>
            </div>

          </b-tab>
          <b-tab title="In Review">

            <!-- Projects cards container -->
            <div class="container">
              <div class="row">

                <!-- Card column -->
                <div class="col-md-6" v-if="item.status === 'In Review'" v-for="item in projects" style="margin-top:1em;">
                  <b-card no-body
                          v-bind:img-src="item.image"
                          img-alt="Image"
                          img-top
                          tag="div"
                          class="mb-2">
                    <h4 slot="header">{{ item.name }}</h4>
                    <b-card-body>
                      <p class="d-inline text-secondary">{{ item.status }}</p>
                      <p class="d-inline text-secondary">{{ item.duration }} days</p>
                      <p class="card-text mt-3">
                        {{ item.description }}
                      </p>
                      <p class="d-inline text-secondary"><span class="text-info">{{ item.votes }}</span> Votes</p>
                      <span class="badge badge-secondary">{{ item.category }}</span>
                    </b-card-body>
                  </b-card>
                  <!-- End of card column -->
                </div>

                <!-- End or Row -->
              </div>
            </div>

            <!-- Load more Button -->
            <div class="container" style="margin-top:1em; margin-bottom:1em;">
              <div class="row">
                <div class="col-md-12">
                  <button type="button" class="btn btn-secondary">Show more</button>
                </div>
              </div>
            </div>

          </b-tab>
          <b-tab title="On Going">

            <div class="container">
              <div class="row">

                <!-- Card column -->
                <div class="col-md-6" v-if="item.status === 'On Going'" v-for="item in projects" style="margin-top:1em;">
                  <b-card no-body
                          v-bind:img-src="item.image"
                          img-alt="Image"
                          img-top
                          tag="div"
                          class="mb-2">
                    <h4 slot="header">{{ item.name }}</h4>
                    <b-card-body>
                      <p class="d-inline text-secondary">{{ item.status }}</p>
                      <p class="d-inline text-secondary">{{ item.duration }} days</p>
                      <p class="card-text mt-3">
                        {{ item.description }}
                      </p>
                      <p class="d-inline text-secondary"><span class="text-info">{{ item.votes }}</span> Votes</p>
                      <span class="badge badge-secondary">{{ item.category }}</span>
                    </b-card-body>
                  </b-card>
                  <!-- End of card column -->
                </div>

                <!-- End or Row -->
              </div>
            </div>

            <div class="container" style="margin-top:1em; margin-bottom:1em;">
              <div class="row">
                <div class="col-md-12">
                  <button type="button" class="btn btn-secondary">Show more</button>
                </div>
              </div>
            </div>

          </b-tab>
          <b-tab title="Rejected">

            <div class="container">
              <div class="row">

                <!-- Card column -->
                <div class="col-md-6" v-if="item.status === 'Rejected'" v-for="item in projects" style="margin-top:1em;">
                  <b-card no-body
                          v-bind:img-src="item.image"
                          img-alt="Image"
                          img-top
                          tag="div"
                          class="mb-2">
                    <h4 slot="header">{{ item.name }}</h4>
                    <b-card-body>
                      <p class="d-inline text-secondary">{{ item.status }}</p>
                      <p class="d-inline text-secondary">{{ item.duration }} days</p>
                      <p class="card-text mt-3">
                        {{ item.description }}
                      </p>
                      <p class="d-inline text-secondary"><span class="text-info">{{ item.votes }}</span> Votes</p>
                      <span class="badge badge-secondary">{{ item.category }}</span>
                    </b-card-body>
                  </b-card>
                  <!-- End of card column -->
                </div>

                <!-- End or Row -->
              </div>
            </div>

            <!-- Load more Button -->
            <div class="container" style="margin-top:1em; margin-bottom:1em;">
              <div class="row">
                <div class="col-md-12">
                  <button type="button" class="btn btn-secondary">Show more</button>
                </div>
              </div>
            </div>

          </b-tab>

        </b-tabs>
      </b-card>
      <!-- End of Categories tabs content -->
    </div>

  </main>
</template>

<script>
  import CategoryTabContent from '../components/CategoryTabContent.vue'

  export default {
    name: 'ProjectReview',
    components: {
      CategoryTabContent
    },
    data () {
      return {
        page: 'Project Review',
        projects: [
          { image: 'https://picsum.photos/600/300/?image=25', status: 'Pending Review', duration: '12', name: 'Warhammer', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'Pending Review', duration: '10', name: 'Red Alert', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'In Review', duration: '19', name: 'GTA', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'On Going', duration: '4', name: 'Diablo', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'On Going', duration: '19', name: 'Sim City', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'In Review', duration: '10', name: 'Red Alert', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'Pending Review', duration: '19', name: 'GTA', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'Pending Review', duration: '4', name: 'Diablo', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'In Review', duration: '19', name: 'Sim City', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'Rejected', duration: '19', name: 'GTA', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'Rejected', duration: '13', name: 'Project Name', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
          { image: 'https://picsum.photos/600/300/?image=25', status: 'Rejected', duration: '19', name: 'GTA', description: 'This is a project description example to illustrate', votes: '432', category: 'Community' }
        ],
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
