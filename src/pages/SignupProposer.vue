<template>
  <main role="main">
        <!-- Page Title Jubotron -->
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
          <h1 class="display-6">
            Proposer Signup
          </h1>
      </div>
    <!-- End of jumbotron -->
    </div>

    <!-- Project Creation Form -->
    <div class="container">
      <SignupProposerForm></SignupProposerForm>
    </div>

  </main>
</template>

<script>
import SignupProposerForm from '@/components/SignupProposer/Form'

export default {
  name: 'SignupProposer',
  components: {
    SignupProposerForm
  },
  data () {
    return {
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()

      /* Reset our form values */
      this.form.category = null
      this.form.email = ''
      this.form.name = ''
      this.form.checked = []

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
