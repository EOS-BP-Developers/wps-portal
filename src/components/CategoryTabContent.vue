<template>

  <b-card no-body>
    <b-tabs card>

      <!-- Hot Tab - Most voted projects on top -->
      <b-tab title="Hot" active>

        <!-- Projects cards container -->
        <div class="container">
          <div class="row">

            <!-- Card column -->
            <div class="col-md-6 border" v-for="item in projects">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <img v-bind:src="item.image">
                  </div>
                  <div class="col-md-6">
                    <div class="container fluid">
                      <div class="row" style="margin-top:1em;">
                        <div class="col-md-6">
                          <p style="color:green;"> {{ item.status }} </p>
                        </div>
                        <div class="col-md-6">
                          <p> {{ item.count }} </p>
                        </div>
                      </div>
                    </div>

                    <h2>{{ item.name }}</h2>
                    <p>{{ item.description }}</p>

                    <div class="container fluid">
                      <div class="row">
                        <div class="col-md-6">
                          <p>{{ item.votes }}</p>
                        </div>
                        <div class="col-md-6">
                          <span class="badge badge-secondary">{{ item.category }}</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            <!-- End of card column -->
            </div>

          <!-- End or Row -->
          </div>
        </div>

      <!-- Latest Tab - Most Recent projects on top -->
      </b-tab>
      <b-tab title="Latest">

        <div class="container">
          <div class="row">

            <!-- Need same cards ordered by date -->

          </div>
        </div>

      </b-tab>
    </b-tabs>
  </b-card>

</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'

export default {
  name: 'CategoryTabContent',
  data () {
    return {
      page: 'CategoryTabContent',
      projects: [
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '12', name: 'Warhammer', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '10', name: 'Red Alert', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '19', name: 'GTA', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '4', name: 'Diablo', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '19', name: 'Sim City', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' },
        { image: 'https://vignette.wikia.nocookie.net/undertale-rho/images/5/5f/Placeholder.jpg/revision/latest?cb=20180213155916', status: 'Ongoing', count: '13', name: 'Project Name', description: 'This is a project description example to illustrate', votes: '432', category: 'Popular' }
      ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
