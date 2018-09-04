<template>
  <main role="main">
        <!-- Page Title Jubotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
          <h1 class="display-6">
            Create New Project
          </h1>
      </div>
    <!-- End of jumbotron -->
    </div>x

    <!-- Project Creation Form -->
    <div class="container">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="text-left">

        <h3>Main information</h3>

        <b-form-group id="proposer"
                      label="Proposer (Linked to Scatter Identity)"
                      label-for="proposer">
          <b-form-input id="proposer"
                        type="text"
                        v-model="form.proposer"
                        required
                        placeholder="Proposer">
          </b-form-input>
        </b-form-group>

        <b-form-group id="categories"
                      label="Select Committee"
                      label-for="categories">
          <b-form-select id="categories"
                        :options="committees"
                        required
                        v-model="form.committee">
          </b-form-select>
        </b-form-group>

        <b-form-group id="title"
                      label="Title"
                      label-for="title"
                      description="Maximum 256 characters">
          <b-form-input id="title"
                        type="text"
                        v-model="form.title"
                        required
                        placeholder="Type Project Title"
                        :maxlength="maxTitle">
          </b-form-input>
        </b-form-group>

        <b-form-group id="summary"
                      label="Summary"
                      label-for="summary"
                      description="Maximum 400 characters">
          <b-form-textarea id="summary"
                        type="text"
                        v-model="form.summary"
                        required
                        placeholder="Type Project Summary"
                        :rows="3"
                        :max-rows="3"
                        :maxlength="maxSummary">
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="media"
                      label="Image or Video"
                      label-for="media">
          <b-form-input id="media"
                        type="url"
                        v-model="form.project_img_url"
                        required
                        placeholder="Copy Paste an Image or Video URL to illustrate project">
          </b-form-input>
        </b-form-group>

        <h3>Project Description</h3>

        <b-form-group id="description"
                      label="Project description"
                      label-for="description"
                      description="Maximum 5000 characters">
          <b-form-textarea id="description"
                        type="text"
                        v-model="form.description"
                        required
                        placeholder="Describe your project to the community, your story will help us to understand why you started this project and why we need to fund it."
                        :rows="6"
                        :max-rows="6"
                        :maxlength="maxdescription">
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="roadmap"
                      label="Financial Roadmap"
                      label-for="roadmap"
                      description="Maximum 2000 characters">
          <b-form-textarea id="roadmap"
                        type="text"
                        v-model="form.roadmap"
                        required
                        placeholder="Describe detailed plan for the use of raised funds."
                        :rows="6"
                        :max-rows="6"
                        :maxlength="maxRoadmap">
          </b-form-textarea>
        </b-form-group>

        <h3>Team</h3>
        <!-- Team Member Input section  -->
        <b-form-group id="teamMemberInitial"
                      label="Team Member"
                      label-for="teamMemberInitial">
          <b-form-input id="teamMemberInitial"
                        type="url"
                        v-model="teamMemberInitial.url"
                        required
                        placeholder="Copy Paste Linkedin Profile URL">
          </b-form-input>
        </b-form-group>
        <!-- Add remove Team Member section click on button to add Team member form group -->
        <b-form-group v-for="(member, index) in form.members"
                      :key="index"
                      id="teamMember"
                      label="Team Member"
                      label-for="teamMember">
          <b-form-input id="teamMember"
                        type="url"
                        v-model="member.url"
                        required
                        placeholder="Copy Paste Linkedin Profile URL">
          </b-form-input>
        </b-form-group>
        <!--Add and remove Team member buttons-->
        <div class="my-3">
          <b-button variant="primary" @click="addRow">
          Add Team Member
          </b-button>
          <b-button variant="danger" v-on:click="removeElement(index);" >
          Remove Team Member
          </b-button>
        </div>

        <h3>Funding</h3>

        <b-form-group id="funding"
                      label="Funding Goal (in EOS, for 1 year)"
                      label-for="funding"
                      description="Your funding goal is the minimum amount you need to run your project">
          <b-form-input id="funding"
                        type="number"
                        v-model="form.funding_goal"
                        required
                        placeholder="Type amount"
                        :max="maxFund"
                        :min="minFund">
          </b-form-input>
        </b-form-group>

        <b-form-group id="duration"
                      label="Project Duration (Number of days)"
                      label-for="duration"
                      description="Maximum 60 days">
          <b-form-input id="duration"
                        type="number"
                        v-model="form.duration"
                        required
                        placeholder="Type number of days"
                        :max="maxDays">
          </b-form-input>
        </b-form-group>

        <div class="container my-2 text-center">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </div>
      </b-form>
    </div>

  </main>
</template>

<script>
import EOS from 'eosjs'
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'CreateProject',
  data () {
    return {
      maxTitle: '256',
      maxSummary: '400',
      maxdescription: '5000',
      maxRoadmap: '2000',
      maxFund: 1000000000,
      minFund: 1,
      maxDays: 60,
      form: {
        committee: null,
        subcategory: null,
        title: null,
        summary: null,
        project_img_url: null,
        description: null,
        roadmap: null,
        duration: null,
        members: [],
        funding_goal: null
      },
      teamMemberInitial: {
        url: ''
      },
      committees: [
        { text: 'Select One', value: null },
        'Community', 'Education', 'Games', 'Others'
      ],
      show: true,
      success: null,
      error: null
    }
  },

  computed: {
    ...mapState({
      scatter: state => state.scatter.scatter,
      defaultNetwork: state => state.scatter.defaultNetwork
    }),

    ...mapGetters({
      scatterAccount: 'api/GET_SCATTER_ACCOUNT'
    })
  },

  methods: {
    // Dynamic From for Team members
    addRow: function () {
      this.form.members.push({
        url: ''
      })
    },
    removeElement: function (index) {
      this.form.members.splice(index, 1)
    },
    setFilename: function (event, row) {
      var file = event.target.files[0]
      row.file = file
    },
    onSubmit (evt) {
      evt.preventDefault()
      
      // Clone object
      let form = Object.assign({}, this.form)

      // Update members
      form.members = ([this.teamMemberInitial, ...form.members]).map(member => member.url)

      // Check that acc exists
      if (!this.scatterAccount) {
        alert('link scatter identity')
        return
      }

      // Initialize eosjs
      let eosjs = this.scatter.eos(this.network, EOS)

      // Send TX
      eosjs.transaction({
        actions: [{
          account: 'eosio.wps',
          name: 'regproposal',
          authorization: [{
            actor: this.scatterAccount.name,
            permission: this.scatterAccount.authority
          }],
          data: form
        }]
      }).then(success => {
        this.success = success
        console.log(success)
      }).catch(error => {
        this.error = error
        console.log(error)
      })
    },
    onReset (evt) {
      evt.preventDefault()

      /* Reset our form values */
      this.form.category = null
      this.form.title = ''
      this.form.summary = ''
      this.form.project_img_url = ''
      this.form.teamMemberInitial = ''
      this.form.description = ''
      this.form.roadmap = ''
      this.form.funding = ''
      this.form.duration = ''

      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
