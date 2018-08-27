<template>
  <main role="main" class="px-0">

      <pre style="padding-top:100px"><code>Proposals: {{proposals}} </code></pre><br><br>
      <pre><code>Rejected Proposals: {{rejectedProposals}} </code></pre><br><br>
      <pre><code>Finished Proposals: {{finishedProposals}} </code></pre><br><br>
      <pre><code>Proposers: {{proposers}} </code></pre><br><br>
      <pre><code>Reviewers: {{reviewers}} </code></pre><br><br>
      <pre><code>Committees: {{committees}} </code></pre><br><br>
      <pre><code>Votings: {{votings}} </code></pre><br><br>
      <pre><code>WPS Global: {{wpsGlobal}} </code></pre><br><br>

      <pre><code>Single Proposal: {{singleProposal}} </code></pre><br><br>

  </main>

</template>

<script>
import CategoryTabContent from '../components/CategoryTabContent.vue'

export default {
  name: 'Home',
  components: {
    CategoryTabContent
  },
  data () {
    return {
      proposals: null,
      rejectedProposals: null,
      finishedProposals: null,
      proposers: null,
      reviewers: null,
      committees: null,
      votings: null,
      wpsGlobal: null,
      singleProposal: null
    }
  },
  computed: {
    computedNumbers () {
      let projects = this.projects
      return projects.sort((a, b) => Number(b.votes) - Number(a.votes))
    }
  },
  methods: {
    async fetchData () {
      this.proposals = await this.$store.getters['api/GET_API'].getProposals()
      this.rejectedProposals = await this.$store.getters['api/GET_API'].getRejectedProposals()
      this.finishedProposals = await this.$store.getters['api/GET_API'].getFinishedProposals()
      this.proposers = await this.$store.getters['api/GET_API'].getProposers()
      this.reviewers = await this.$store.getters['api/GET_API'].getReviewers()
      this.committees = await this.$store.getters['api/GET_API'].getCommittees()
      this.votings = await this.$store.getters['api/GET_API'].getVotings()
      this.wpsGlobal = await this.$store.getters['api/GET_API'].getWpsGlobal()
      this.singleProposal = await this.$store.getters['api/GET_API'].getProposal(2)
    }
  },
  created () {
    this.fetchData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
