<template>
  <main role="main">
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
                      description="Maximum 60 characters">
          <b-form-input id="title"
                        type="text"
                        v-model="form.title"
                        required
                        placeholder="Type Project Title"
                        :maxlength="maxTitle">
          </b-form-input>
        </b-form-group>

        <b-form-group id="subtitle"
                      label="Subitle"
                      label-for="subtitle"
                      description="Maximum 140 characters">
          <b-form-input id="subtitle"
                        type="text"
                        v-model="form.subtitle"
                        required
                        placeholder="Type Project Subtitle"
                        :maxlength="maxSubtitle">
          </b-form-input>
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
                      label-for="overview">
          <b-form-textarea id="overview"
                        type="text"
                        v-model="form.overview"
                        required
                        placeholder="Describe your porject to the community, your story will help us to understand why you started this project and why we need to fund it."
                        :rows="6"
                        :max-rows="6"
                        :maxlength="maxDescription">
          </b-form-textarea>
        </b-form-group>

        <b-form-group id="roadmap"
                      label="Financial Roadmap"
                      label-for="roadmap">
          <b-form-textarea id="roadmap"
                        type="text"
                        v-model="form.roadmap"
                        required
                        placeholder="Describe detailed plan for the use of raised funds."
                        :rows="6"
                        :max-rows="6"
                        :maxlength="maxDescription">
          </b-form-textarea>
        </b-form-group>

        <h3>Team</h3>

        <b-form-group id="teamMember1"
                      label="Team Member 1"
                      label-for="teamMember1">
          <b-form-input id="teamMember1"
                        type="url"
                        v-model="form.teamMember1"
                        required
                        placeholder="Copy Paste Linkedin Profile URL">
          </b-form-input>
        </b-form-group>

        <b-form-group id="teamMember2"
                      label="Team Member 2"
                      label-for="teamMember2">
          <b-form-input id="teamMember2"
                        type="url"
                        v-model="form.teamMember2"
                        required
                        placeholder="Copy Paste Linkedin Profile URL">
          </b-form-input>
        </b-form-group>

        <b-form-group id="teamMember3"
                      label="Team Member 3"
                      label-for="teamMember3">
          <b-form-input id="teamMember3"
                        type="url"
                        v-model="form.teamMember3"
                        required
                        placeholder="Copy Paste Linkedin Profile URL">
          </b-form-input>
        </b-form-group>

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
                        :max="maxFund">
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
      maxTitle: '60',
      maxSubtitle: '140',
      maxDescription: '2000',
      maxFund: 1000000000,
      maxDays: 60,
      page: 'CreateProject',
      title: 'Create New Project',
      form: {
        categories: null,
        title: '',
        subtitle: '',
        media: '',
        overview: '',
        roadmap: '',
      },
      categories: [
        { text: 'Select One', value: null },
        'Community', 'Education', 'Games', 'Others'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.category = null;
      this.form.email = '';
      this.form.name = '';
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
