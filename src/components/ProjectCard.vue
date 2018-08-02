<template>
<div class="col-md-6 border">
  <div class="container">
    <div class="row">
      <div class="col-md-6" style="background:grey;">
        <img>
      </div>
      <div class="col-md-6">
        <div class="container fluid">
          <div class="row" style="margin-top:1em;">
            <div class="col-md-6">
              <p style="color:green;">Ongoing</p>
            </div>
            <div class="col-md-6">
              <p>D-12</p>
            </div>
          </div>
        </div>

        <h2>Project 1</h2>
        <p>This is project 1 description, this is a long description because it's an important project</p>

        <div class="container fluid">
          <div class="row">
            <div class="col-md-6">
              <p>435 Votes</p>
            </div>
            <div class="col-md-6">
              <span class="badge badge-secondary">Category Label</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'ProjectCard',
  data () {
    return {
      page: 'ProjectCard'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
