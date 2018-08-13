<template>
  <main role="main" class="px-0">

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
        <div class="col-md-3" v-for="(value, key) in statistics">
          <h2 class="mt-1">{{ value }}</h2>
          <p>{{ key }}</p>
        </div>
      <!-- End of Row  -->
      </div>
    <!-- End of Statistics container -->
    </div>

    <!-- Start Tabs Container -->
    <div class="container mt-2">
      <!-- Start of Categories Tabs -->
      <b-tabs class="text-center">
        <!-- Popular Projects Tab -->
        <b-tab title="Popular" active>

          <b-card no-body>
            <b-tabs card>

              <!-- Hot Tab - Most voted projects on top -->
              <b-tab title="Hot" active @click="sortBy('votes')">

                  <b-card-group deck class="mb-3">

                    <div class="row">
                      <div class="col-md-4" v-if="item.category === 'Popular'" v-for="item in sortedItems">

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
                            <p class="card-text mt-3">
                              {{ item.timestamp }}
                            </p>
                          </b-card-body>
                          <b-card-footer>
                            <button type="button" class="btn btn-secondary">View</button>
                          </b-card-footer>
                        </b-card>

                      </div>
                    </div>

                  </b-card-group>

              </b-tab>

              <b-tab title="Latest" @click="sortBy('timestamp')">

                <b-card-group deck
                              class="mb-3">

                  <div class="row">
                    <div class="col-md-4" v-if="item.category === 'Popular'" v-for="item in sortedItems">

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
                          <p class="card-text mt-3">
                            {{ item.timestamp }}
                          </p>
                        </b-card-body>
                        <b-card-footer>
                          <button type="button" class="btn btn-secondary">View</button>
                        </b-card-footer>
                      </b-card>

                    </div>
                  </div>

                </b-card-group>

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

                              <b-card-group deck
                                class="mb-3">

                    <div class="row">
                      <div class="col-md-4" v-if="item.category === 'Community'" v-for="item in sortedItems">

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
                            <p class="card-text mt-3">
                              {{ item.timestamp }}
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

                <b-card-group deck
                              class="mb-3">

                  <div class="row">
                    <div class="col-md-4" v-if="item.category === 'Community'" v-for="item in sortedItems">

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
                          <p class="card-text mt-3">
                            {{ item.timestamp }}
                          </p>
                        </b-card-body>
                        <b-card-footer>
                          <button type="button" class="btn btn-secondary">View</button>
                        </b-card-footer>
                      </b-card>

                    </div>
                  </div>

                </b-card-group>

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
import { parseDate } from '../utils/parseDate'

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
      sortProp: 'votes',
      projects: [
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Warhammer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '432', category: 'Popular', timestamp: parseDate('2018-02-08 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Red Alert', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '345', category: 'Popular', timestamp: parseDate('2018-02-18 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '256', category: 'Community', timestamp: parseDate('2018-04-08 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Diablo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '846', category: 'Popular', timestamp: parseDate('2018-05-28 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Sim City', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '176', category: 'Community', timestamp: parseDate('2018-01-04 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Red Alert', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '431', category: 'Popular', timestamp: parseDate('2018-07-31 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '112', category: 'Community', timestamp: parseDate('2018-12-08 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Diablo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '543', category: 'Popular', timestamp: parseDate('2018-03-09 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Sim City', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '165', category: 'Community', timestamp: parseDate('2018-02-08 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '143', category: 'Community', timestamp: parseDate('2018-10-02 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Pod', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '431', category: 'Popular', timestamp: parseDate('2018-07-07 09+07:00') },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '943', category: 'Community', timestamp: parseDate('2018-08-12 09+07:00') }
      ],
    }
  },
  computed: {
    sortedItems() {
      const self = this;
      return self.projects.sort(function(a, b) {
        return b[self.sortProp] - a[self.sortProp];
      });
    }
  },
  methods: {
    sortBy(prop) {
      this.sortProp = prop;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
