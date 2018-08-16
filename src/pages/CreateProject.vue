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
    </div>

    <!-- Project Creation Form -->
    <div class="container">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="text-left">

        <h3>Main information</h3>

        <b-form-group id="categories"
                      label="Select Project Category"
                      label-for="categories">
          <b-form-select id="categories"
                        :options="categories"
                        required
                        v-model="form.categories">
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
                        v-model="form.media"
                        required
                        placeholder="Copy Paste an Image or Video URL to illustrate project">
          </b-form-input>
        </b-form-group>

        <h3>Project Description</h3>

        <b-form-group id="overview"
                      label="Project Overview"
                      label-for="overview"
                      description="Maximum 5000 characters">
          <b-form-textarea id="overview"
                        type="text"
                        v-model="form.overview"
                        required
                        placeholder="Describe your project to the community, your story will help us to understand why you started this project and why we need to fund it."
                        :rows="6"
                        :max-rows="6"
                        :maxlength="maxOverview">
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
                        v-model="form.teamMemberInitial"
                        required
                        placeholder="Copy Paste Linkedin Profile URL">
          </b-form-input>
        </b-form-group>
        <!-- Add remove Team Member section click on button to add Team member form group -->
        <b-form-group v-for="(row, index) in rows"
                      :key="index"
                      id="teamMember"
                      label="Team Member"
                      label-for="teamMember">
          <b-form-input id="teamMember"
                        type="url"
                        v-model="row.url"
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
                        v-model="form.funding"
                        required
                        placeholder="Type amount"
                        :max="maxFund"
                        :min="minFund">
          </b-form-input>
        </b-form-group>

        <b-form-group id="duration"
                      label="Voting Duration (Number of days)"
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
export default {
  name: 'CreateProject',
  data () {
    return {
      maxTitle: '256',
      maxSummary: '400',
      maxOverview: '5000',
      maxRoadmap: '2000',
      maxFund: 1000000000,
      minFund: 1,
      maxDays: 60,
      form: {
        categories: null,
        title: '',
        summary: '',
        media: '',
        teamMemberInitial: '',
        overview: '',
        roadmap: '',
        funding: '',
        duration: ''
      },
      categories: [
        { text: 'Select One', value: null },
        'Community', 'Education', 'Games', 'Others'
      ],
      show: true,
      rows: []
    }
  },
  methods: {
    // Dynamic From for Team members
    addRow: function () {
      this.rows.push({
        teamMember: ''
      })
    },
    removeElement: function (index) {
      this.rows.splice(index, 1)
    },
    setFilename: function (event, row) {
      var file = event.target.files[0]
      row.file = file
    },
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()

      /* Reset our form values */
      this.form.category = null
      this.form.title = ''
      this.form.summary = ''
      this.form.media = ''
      this.form.teamMemberInitial = ''
      this.form.overview = ''
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
