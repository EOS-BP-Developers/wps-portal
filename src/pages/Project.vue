<template>
  <main role="main">

    <!-- # Horizontal Card : Image Left Side, Details Right Side -->
    <div class="container py-5">
      <div class="card">
        <div class="row">
          <div class="col-lg-6">
            <img v-bind:src="singleProposal.project_img_url" class="w-100">
          </div>
          <div class="col-lg-6">

            <!-- # Details Right Side -->
            <div class="container">
              <div class="row text-left">
                <div class="col-md-12">
                  <p class="h6 py-3"><span class="border border-primary rounded py-1 px-4">{{ singleProposal.category }}</span></p>
                  <h1 class="card-title py-0 my-0">{{ singleProposal.title }}</h1>
                  <h4 class="card-text text-muted">{{ singleProposal.summary}}</h4>
                  <h6 class="text-primary pt-3">{{ singleProposal.proposer }}</h6>

                  <!-- # Project Team Information -->
                  <div class="row">
                    <div class="col-md-2">
                      <img class="rounded-circle" v-bind:src="userImage">
                    </div>
                    <div class="col-md-8">
                      <!-- Need to fetch data from created account for userName and userLocation -->
                      <p class="h6 pt-2">{{ userName }} </p>
                      <p class="h6">{{ userLocation }} </p>
                    </div>
                  </div>
                  <!-- # End of Project Team Information -->

                  <!-- # Voting Information -->
                  <div class="row">
                    <div class="col-6 pt-2">
                      <p class="h5 text-primary">{{ singleProposal.agree_votes }}<span class="h6 font-weight-normal">voters support this project.</span></p>
                    </div>
                    <div class="col-6 pt-2">
                      <p class="h6 text-success float-right">Status: {{ singleProposal.status }}</p>
                    </div>
                  </div>
                  <!-- # End of Voting Information -->

                  <!-- # Vote Progress Bar -->
                  <div class="row">
                    <div class="col-md-12">
                      <!--<b-progress :value="singleProposal.duration" :max="singleProposal.duration" show-progress animated></b-progress>-->
                      <b-progress show-value :max="singleProposal.total_votes" class="mb-3">
                        <b-progress-bar variant="success" :value="singleProposal.agree_votes"></b-progress-bar>
                        <b-progress-bar variant="danger" :value="singleProposal.disagree_votes"></b-progress-bar>
                      </b-progress>
                    </div>
                  </div>
                  <!-- # End of Vote Progress Bar -->

                  <!-- # Vote and Share Buttons -->
                  <div class="row">
                    <div class="col-lg-6 py-3">
                      <b-button variant="primary">
                          <!--Need Submit to account for voting-->
                          <span class="h6 text-uppercase px-4">Vote for this project</span>
                      </b-button>
                    </div>
                    <div class="col-lg-6 py-3">
                      <b-button variant="outline-primary">
                        <span class="h6 px-3">Share</span>
                      </b-button>
                    </div>
                  </div>
                  <!-- # End of Vote and Share Buttons -->

                  <!-- # Created / Expires Information -->
                  <div class="row">
                    <div class="col-md-6">
                      <!-- Do we have  -->
                      <p class="h6 font-weight-normal my-0 float-right">Created: {{ singleProposal.vote_start_time }}</p>
                    </div>
                    <div class="col-md-6">
                      <p class="h6 font-weight-normal my-0 float-right">Expires: {{ expireDate }}</p>
                    </div>
                  </div>
                  <!-- # End of Created / Expires Information -->

                </div>
              </div>
            </div>
          </div>
          <!-- # End of Details Right Side -->

        </div>
      </div>
    </div>
    <!-- # End of Horizontal Card : Image Left Side, Details Right Side -->

    <!-- # Content Section : Headline, Contents -->
    <div class="container">
      <!-- Project Overview -->
      <div class="row text-left py-3">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <h2>Project Overview</h2>
          <p>{{ singleProposal.description }}</p>
          <hr class="hr-primary" />
        </div>
        <div class="col-md-2"></div>
      </div>
      <!-- Financial Roadmap -->
      <div class="row text-left py-3">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <h2>Financial Roadmap</h2>
          <p>{{ singleProposal.roadmap }}</p>
          <hr class="hr-primary" />
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
    <!-- # End of Content Section : Headline, Contents -->

    <!-- # Team Members : Photo, Name, Role, Company -->
    <div class="container">
      <div class="row text-left py-3">
        <div class="col-md-2"></div>
        <div class="col-md-8">
          <h2>Team Members</h2>
        <div class="row text-center py-3 mb-5">
        <div class="col-md-4 float-left" v-for="i in teamMembers" v-bind:key="i.id">
          <img class="rounded-circle" v-bind:src="i.image">
          <p class="mb-0 mt-3"><strong>{{ i.name }}</strong></p>
          <p class="my-0">{{ i.role }}</p>
          <p class="my-0">{{ i.company }}</p>
        </div>
      </div>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>
    <!-- # End of Team Members : Photo, Name, Role, Company -->
    <pre><code>Single Proposal: {{singleProposal}} </code></pre><br><br>
  </main>
</template>

<script>
export default {
  name: 'Project',
  data () {
    return {
      title: 'EOS Rogue',
      subTitle: 'The first turned based game based on the EOS blockchain.',
      category: 'Games',
      voteCount: 327,
      voteRequired: 500,
      image: 'https://placeholdit.imgix.net/~text?txtsize=38&txt=500%C3%97400&w=500&h=400',
      description:
      [
        {id: 1, sectionTitle: 'Overview', contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
        {id: 2, sectionTitle: 'Financial Roadmap', contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
      ],
      createDate: 'MM/DD/YYYY hh:mm',
      expireDate: 'MM/DD/YYYY hh:mm',
      daysLeft: 'createDate - expireDate',
      status: 'On Going',
      userName: 'User Name',
      userImage: 'https://placeholdit.imgix.net/~text?txtsize=38&txt=60%C3%9760&w=60&h=60',
      userLocation: 'Location of origin',
      telegram: '',
      linkedIn: '',
      facebook: '',
      teamMembers:
      [
        {id: 1, image: 'https://placeholdit.imgix.net/~text?txtsize=38&w=100&h=100', name: 'Ron Howard', role: 'Product Designer', company: 'Wayland Yutani'},
        {id: 2, image: 'https://placeholdit.imgix.net/~text?txtsize=38&w=100&h=100', name: 'Sharon Valerii', role: 'UX Designer', company: 'Wayland Yutani'},
        {id: 3, image: 'https://placeholdit.imgix.net/~text?txtsize=38&w=100&h=100', name: 'Gaius Balter', role: 'Senior Engineer', company: 'Wayland Yutani'}
      ],
      proposals: [],
      singleProposal: null
    }
  },
  methods: {
    async getProposal () {
      this.singleProposal = await this.$store.getters['api/GET_API'].getProposal(2)
    }
  },
  created () {
    this.getProposal()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
