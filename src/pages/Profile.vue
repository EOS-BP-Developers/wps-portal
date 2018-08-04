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

    <div class="container" style="margin-bottom:1em; margin-top:1em;">
      <div class="row">
        <div class="col-xl-12">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link active" href="#">Profile Info</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">My Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container border" style="margin-bottom:1em;">
      <div class="row">
        <div class="col-xl-6">
          <form>
            <div class="form-group" style="margin-top:1em;">
              <label for="exampleFormControlInput1">Username</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Type Username">
            </div>

            <div class="form-group">
              <label for="exampleFormControlInput1">Picture</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Upload Picture">
            </div>

            <div class="form-group">
              <label for="exampleFormControlTextarea1">Short Bio</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Describe Yourself"></textarea>
            </div>
          </form>
        </div>
        <div class="col-xl-6">
        <form>
          <div class="form-group" style="margin-top:1em;">
            <label for="exampleFormControlInput1">Location</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="E.g. Seattle">
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Telegram Username</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Telegram Username">
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Website</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Website URL">
          </div>

          <div class="form-group">
            <label for="exampleFormControlInput1">Linkedin</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Linkedin URL">
          </div>

        </form>
        </div>

        <div class="container" style="margin-top:1em; margin-bottom:1em;">
          <div class="row">
            <div class="col-md-12">
              <button type="button" class="btn btn-secondary">Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </main>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      page: 'My Profile'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
