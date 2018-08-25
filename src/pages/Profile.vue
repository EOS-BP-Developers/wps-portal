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
    <div class="container mt-2">
      <b-tabs>
        <b-tab title="Profile Info" active>
          <div class="container border mb-2">

            <!-- Form Inner Container -->
            <div class="container mt-2">

              <!-- Profile Form Input fields -->
              <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="mt-2">
                <div class="row">

                  <!-- Left column -->
                  <div class="col-xl-6 text-left">

                    <b-form-group id="username"
                                  label="Username:"
                                  label-for="username">
                      <b-form-input id="username"
                                    type="text"
                                    v-model="form.username"
                                    required
                                    placeholder="Type your username">
                      </b-form-input>
                    </b-form-group>

                    <b-form-group id="picture"
                                  label="Profile Picture:"
                                  label-for="picture">
                      <b-form-input id="picture"
                                    type="url"
                                    v-model="form.picture"
                                    required
                                    placeholder="Enter a picture URL">
                      </b-form-input>
                    </b-form-group>

                    <b-form-group id="bio"
                                  label="Short Bio:"
                                  label-for="bio">
                      <b-form-textarea id="bio"
                                    type="text"
                                    v-model="form.bio"
                                    required
                                    placeholder="Type short description of yourself"
                                    :rows="5"
                                    :max-rows="6">>
                      </b-form-textarea>

                    </b-form-group>
                  <!-- End of left column -->
                  </div>

                  <!-- Right column -->
                  <div class="col-xl-6 text-left">

                    <b-form-group id="location"
                                  label="Location:"
                                  label-for="location">
                      <b-form-input id="location"
                                    type="text"
                                    v-model="form.location"
                                    placeholder="Type City and Country">
                      </b-form-input>
                    </b-form-group>

                    <b-form-group id="telegram"
                                  label="Telegram Username:"
                                  label-for="telegram">
                      <b-form-input id="telegram"
                                    type="text"
                                    v-model="form.telegram"
                                    placeholder="Type Telegram Username">
                      </b-form-input>
                    </b-form-group>

                    <b-form-group id="website"
                                  label="Project Website:"
                                  label-for="website">
                      <b-form-input id="website"
                                    type="url"
                                    v-model="form.website"
                                    placeholder="Type your Website URL">
                      </b-form-input>
                    </b-form-group>

                    <b-form-group id="linkedin"
                                  label="Linkedin Profile:"
                                  label-for="linkedin">
                      <b-form-input id="linkedin"
                                    type="url"
                                    v-model="form.linkedin"
                                    placeholder="Type your Linkedin Profile URL">
                      </b-form-input>
                    </b-form-group>
                  <!-- End of right column -->
                  </div>
                <!-- End of Row -->
                </div>

                <!-- Submission and Reset Buttons for Forom -->
                <div class="container mb-2">
                  <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset Form</b-button>
                </div>
              <!-- End of Form -->
              </b-form>
            </div>
          </div>
        </b-tab>

        <b-tab title="My Projects">

        </b-tab>
      </b-tabs>
    </div>
  </main>
</template>

<script>
import ScatterJS from 'scatter-js/dist/scatter.esm';

export default {
  name: 'Profile',
  data () {
    return {
      page: 'My Profile',
      subtitle: '',
      form: {
        username: '',
        picture: '',
        bio: '',
        location: '',
        telegram: '',
        website: '',
        linkedin: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // TODO: Link Scatter
      console.log(ScatterJS);
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()

      /* Reset our form values */
      this.form.username = ''
      this.form.picture = ''
      this.form.bio = ''
      this.form.location = ''
      this.form.telegram = ''
      this.form.website = ''
      this.form.linkedin = ''

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
