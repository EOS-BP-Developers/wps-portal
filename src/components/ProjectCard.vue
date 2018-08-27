<template>
  <b-card   no-body
            tag="a"
            :href="`/project/${data.id}`"
            class="mb-2"
  >
      <div class="card-image" :style="`background-image: url(${data.project_img_url})`"></div>
      <div class="card-header-info">
        <div class="d-inline proposal-status" :style="`color: ${ getProposalStatusFromCode(data.status).color};`">{{ getProposalStatusFromCode(data.status).text }}</div>
        <div class="d-inline proposal-expiry">{{ getDaysFromToday(data.vote_start_time) }}</div>
      </div>

    <b-card-body>
      <div class="card-text">
        <h5 class="mb-0 text-left" slot="header" :title="data.title">{{ data.title }}</h5>
        <p class="mt-3 mb-0 text-left">{{ data.summary }}</p>
      </div>
    </b-card-body>
    <b-card-footer>
      <div class="d-inline proposal-vote-count"><span>{{ data.total_votes }}</span> votes</div>
      <span class="proposal-category">{{ data.category }}</span>
    </b-card-footer>
  </b-card>
</template>

<script>
import { CONSTANTS, API_MAP } from '@/utils/config'
import { getDaysFromToday } from '@/utils/parseDate'

export default {
  name: 'ProjectCard',
  props: [ 'data' ],
  data () {
    return {
      page: 'ProjectCard',
      proposalStatus: API_MAP.proposalStatus,
      votingDuration: CONSTANTS.votingDuration
    }
  },
  methods: {
    getProposalStatusFromCode (status) {
      let obj = this.proposalStatus.filter(item => item.code === status)[0]
      obj.text = obj.text.toLowerCase()
      return obj
    },
    getDaysFromToday (dateString) {
      const diff = getDaysFromToday(dateString, this.votingDuration)
      if (diff < 0) {
        return 'Expired'
      } else if (diff === 1) {
        return `${diff} day left`
      } else {
        return `${diff} days left`
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  display: grid !important;
  grid-template-columns: 40% 60%;
  -ms-grid-columns: 40% 60%;
  grid-template-rows: 60px 150px 60px;
  -ms-grid-rows: 60px 150px 60px;

  color: initial;
}

.card:hover,
.card:focus {
  text-decoration: none;
}

.card .card-image {
  grid-row: 1 / span 3;
  -ms-grid-row: 1 / span 3;
  grid-column: 1;
  -ms-grid-column: 1;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: calc(0.25rem - 1px) 0 0 calc(0.25rem - 1px);
}

.card .card-header-info {
  grid-row: 1;
  -ms-grid-row: 1;
  grid-column: 2;
  -ms-grid-column: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom: 0;
  padding: 0.75rem 1.25rem;
}

.card .card-header-info .proposal-status {
  font-weight: 600;
  text-transform: capitalize;
}

.card .card-header-info .proposal-expiry {
  color: #a5a5a5;
  font-weight: 600;
}

.card .card-body {
  grid-row: 2;
  -ms-grid-row: 2;
  grid-column: 2;
  -ms-grid-column: 2;

  overflow: hidden;
  padding: 0 1.25rem;
}

.card .card-body h5 {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card .card-body p {
  /* TODO: Need better cross browser solution */
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.card .card-footer {
  grid-row: 3;
  -ms-grid-row: 3;
  grid-column: 2;
  -ms-grid-column: 2;

  border-radius: 0 0 calc(0.25rem - 1px) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  border-top: 0;
}

.card .card-footer .proposal-vote-count {
  color: #a5a5a5;
  font-weight: 700;
}

.card .card-footer .proposal-vote-count span {
  color: #c2b0fc;
  font-weight: 500;
}

.card .card-footer .proposal-category {
  border: 1px solid #dedede;
  border-radius: 2px;
  color: #8995d2;
  padding: 4px 12px;
}
</style>
