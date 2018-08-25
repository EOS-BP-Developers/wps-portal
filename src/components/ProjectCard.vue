<template>
  <b-card   no-body
            v-bind:img-src="project_img_url"
            img-alt="Image"
            img-top
            tag="div"
            style="max-width: 20rem;"
            class="mb-2"
  >
    <h4 slot="header">{{ title }}</h4>
    <b-card-body>
      <p class="d-inline text-success">{{ status }}</p>
      <span class="badge badge-secondary">{{ category }}</span>
      <p class="d-inline text-info">{{ total_votes }} votes</p>
      <p class="card-text mt-3">
        {{ summary }}
      </p>
      <p class="card-text mt-3">
        {{ fund_start_time }}
      </p>
    </b-card-body>
    <b-card-footer>
      <button type="button" class="btn btn-secondary">View</button>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: [ 'project_img_url', 'title', 'status', 'category', 'total_votes', 'summary', 'fund_start_time' ],
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
