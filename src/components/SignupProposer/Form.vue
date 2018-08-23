<template>
    <b-form @submit="submit" @reset="reset" class="text-left">

        <h3>Proposer Info</h3>

        <b-form-group label="First Name"
                      label-for="firstName"
                      :description="mediumMaxLabel">
            <b-form-input required
                        type="text"
                        v-model="form.firstName"
                        placeholder="Type First Name"
                        :maxlength="mediumMax">
            </b-form-input>
        </b-form-group>

        <b-form-group label="Last Name"
                      label-for="lastName"
                      :description="mediumMaxLabel">
            <b-form-input required
                        type="text"
                        v-model="form.lastName"
                        placeholder="Type Last Name"
                        :maxlength="mediumMax">
            </b-form-input>
        </b-form-group>

        <b-form-group label="Country"
                      label-for="country"
                      :description="shortMaxLabel">
            <b-form-select :options="countryOptions"
                        required
                        v-model="form.country">
            </b-form-select>
        </b-form-group>

        <b-form-group label="Biography"
                      label-for="bio"
                      :description="largeMaxLabel">
            <b-form-textarea type="text"
                             v-model="form.biography"
                             required
                             placeholder="Describe yourself for the community"
                             :rows="3"
                             :max-rows="6"
                             :maxlength="largeMax">
            </b-form-textarea>
        </b-form-group>

        <b-form-group label="Image URL"
                        label-for="imageURL"
                        :description="mediumMaxLabel">
            <b-form-input required
                        type="text"
                        v-model="form.imageURL"
                        placeholder="Type Image URL"
                        :maxlength="mediumMax">
            </b-form-input>
        </b-form-group>

        <b-form-group label="Telegram"
                      label-for="telegram"
                      :description="shortMaxLabel">
            <b-form-input id="subtitle"
                        type="text"
                        v-model="form.telegram"
                        required
                        placeholder="Type Telegram Handle"
                        :maxlength="shortMax">
            </b-form-input>
        </b-form-group>

        <b-form-group label="Website"
                      label-for="website"
                      :description="mediumMaxLabel">
            <b-form-input id="subtitle"
                        type="text"
                        v-model="form.website"
                        required
                        placeholder="Type Website"
                        :maxlength="mediumMax">
            </b-form-input>
        </b-form-group>

        <b-form-group label="Linkedin"
                      label-for="linkedin"
                      :description="mediumMaxLabel">
             <b-form-input id="subtitle"
                        type="text"
                        v-model="form.linkedin"
                        required
                        placeholder="Type Linkedin"
                        :maxlength="mediumMax">
            </b-form-input>
        </b-form-group>

        <div class="container my-2 text-center">
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
        </div>

    </b-form>
</template>

<script>
import countries from './countries'

function getDefaultData () {
  return {
    shortMax: 64,
    mediumMax: 128,
    largeMax: 256,
    form: {
      firstName: null,
      lastName: null,
      biography: null,
      imageURL: null,
      telegram: null,
      website: null,
      linkedin: null,
      country: null
    },
    countryOptions: null
  }
}

export default {
  name: 'SignupProposerForm',
  data: getDefaultData,
  computed: {
    shortMaxLabel () {
      return `Maximum ${this.shortMax} characters`
    },
    mediumMaxLabel () {
      return `Maximum ${this.mediumMax} characters`
    },
    largeMaxLabel () {
      return `Maximum ${this.largeMax} characters`
    }
  },
  methods: {
    reset () {
      this.$data = getDefaultData()
    },
    submit () {

    }
  },
  created () {
    this.countryOptions = countries.map(country => ({ text: country.name, value: country.name }))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
