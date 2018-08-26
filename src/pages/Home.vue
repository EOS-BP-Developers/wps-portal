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
      <div class="row shadow-sm stats-panel">
        <div class="col-md-3 px-0 py-2 stats-item" v-for="(value, key) in statistics" :key="key">
          <h2 class="mt-1">{{ value }}</h2>
          <p>{{ key }}</p>
        </div>
      <!-- End of Row  -->
      </div>
    <!-- End of Statistics container -->
    </div>

    <!-- Start Tabs Container -->
    <div class="container px-0 mt-5">
      <!-- Start of Categories Tabs -->
      <b-tabs pills
              class="mt-3"
              nav-class="nav justify-content-center"
              active
              content-class="nav-item"
              title-link-class="nav-link">
        <!-- Popular Projects Tab -->
        <b-tab title="Popular">
            <b-tabs pills
                    class="mt-3"
                    nav-class="justify-content-center"
                    content-class="nav-item">
              <!-- Hot Tab - Most voted projects on top -->
              <b-tab title="Hot" active>
                  <b-card-group deck class="mb-3">

                    <div class="row">
                      <!-- Take note currently no cards will be shown as the only response from api has category value of 'emergency' -->
                      <!-- Change the v-if category value to 'emergency' to test if necessary -->
                      <div class="col-md-6" v-if="proposal.category === 'Popular'" v-for="(proposal, index) in sortByVotes" :key="index">

                        <!-- Project Card -->
                        <project-card :data="proposal"></project-card>

                      </div>
                    </div>

                  </b-card-group>

              </b-tab>

              <b-tab title="Latest">

                <b-card-group deck class="mb-3">

                  <div class="row">
                    <div class="col-md-6" v-if="proposal.category === 'Popular'" v-for="(proposal, index) in sortByLatest" :key="index">

                      <!-- Project Card -->
                      <project-card :data="proposal"></project-card>

                    </div>
                  </div>

                </b-card-group>

              </b-tab>

            </b-tabs>

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
                      <div class="col-md-6" v-if="item.category === 'Community'" v-for="(item, index) in sortByVotes" :key="index">

                        <!-- Project Card -->
                        <project-card :data="proposal"></project-card>

                      </div>
                    </div>

                  </b-card-group>

              <!-- Latest Tab - Most Recent projects on top -->
              </b-tab>
              <b-tab title="Latest">

                <b-card-group deck
                              class="mb-3">

                  <div class="row">
                    <div class="col-md-6" v-if="item.category === 'Community'" v-for="item in sortByLatest">

                      <!-- Project Card -->
                      <project-card :data="proposal"></project-card>

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

      <pre><code>Proposals: {{proposals}} </code></pre>
    <!-- End of Categories tabs content -->
    </div>

  </main>

</template>

<script>
import CategoryTabContent from '../components/CategoryTabContent.vue'
import ProjectCard from '../components/ProjectCard.vue'
import { parseDate } from '../utils/parseDate'

export default {
  name: 'Home',
  components: {
    CategoryTabContent,
    ProjectCard
  },
  data () {
    return {
      title: 'Welcome to the WPS voting Portal',
      subtitle: 'A place to fund innovation on the EOS blockchain',
      statistics: {
        'TOTAL VOTERS': '183,434',
        'TOTAL PROJECTS': '143,432',
        'FUNDED PROJECTS': '734,345',
        'ONGOING PROJECTS': '235,289'
      },
      projects: [
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Warhammer', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '432', category: 'Popular', timestamp: '2018-02-08 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Red Alert', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '345', category: 'Popular', timestamp: '2018-02-18 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '256', category: 'Community', timestamp: '2018-04-08 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Diablo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '846', category: 'Popular', timestamp: '2018-05-28 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Sim City', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '176', category: 'Community', timestamp: '2018-01-04 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Red Alert', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '431', category: 'Popular', timestamp: '2018-07-31 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '112', category: 'Community', timestamp: '2018-12-08 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Diablo', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '543', category: 'Popular', timestamp: '2018-03-09 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Sim City', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '165', category: 'Community', timestamp: '2018-02-08 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '143', category: 'Community', timestamp: '2018-10-02 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'Pod', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '431', category: 'Popular', timestamp: '2018-07-07 09+07:00' },
        { image: 'https://picsum.photos/600/300/?image=25', status: 'Ongoing', name: 'GTA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', votes: '943', category: 'Community', timestamp: '2018-08-12 09+07:00' }
      ],
      proposals: []
    }
  },
  computed: {
    sortByVotes () {
      return Array.prototype.slice.call(this.proposals).sort((a, b) => Number(b.votes) - Number(a.votes))
    },
    sortByLatest () {
      return Array.prototype.slice.call(this.proposals).sort((a, b) => parseDate(b.timestamp) - parseDate(a.timestamp))
    }
  },
  methods: {
    async getProposals () {
      this.proposals = await this.$store.getters['api/GET_API'].getProposals()
      // Uncomment below to test project card timestamp
      // this.proposals[0].vote_start_time = '2018-07-29'
      // this.proposals[0].project_img_url = 'https://c1.staticflickr.com/3/2637/4151968102_5cee017101_b.jpg'

      /*
      this.$store.getters['api/GET_API'].getProposals()
      this.$store.getters['api/GET_API'].getRejectedProposals()
      this.$store.getters['api/GET_API'].getFinishedProposals()
      this.$store.getters['api/GET_API'].getProposers()
      this.$store.getters['api/GET_API'].getReviewers()
      this.$store.getters['api/GET_API'].getCommittees()
      this.$store.getters['api/GET_API'].getVotings()
      this.$store.getters['api/GET_API'].getWpsGlobal()
      */
    }
  },
  created () {
    this.getProposals()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-deck > .row {
  width: 100%; /* For strange behavior when only 1 card exist, .row does not span full width */
}
</style>
