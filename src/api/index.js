class API {
  constructor (eos, account) {
    this.eos = eos
    this.account = account
  }

  getProposals () {
    return this.eos.getTableRows({
      json: true,
      code: this.account,
      scope: this.account,
      table: 'proposals',
      table_key: '',
      limit: 200
    }).then(result => result.rows)
  }

  getRejectedProposals () {
    return this.eos.getTableRows({
      json: true,
      code: this.account,
      scope: this.account,
      table: 'rejectedpros',
      table_key: '',
      limit: 200
    }).then(result => result.rows)
  }

  getFinishedProposals () {
    return this.eos.getTableRows({
      json: true,
      code: this.account,
      scope: this.account,
      table: 'finishedpros',
      table_key: '',
      limit: 200
    }).then(result => result.rows)
  }

  getProposers () {
    return this.eos.getTableRows({
      json: true,
      code: this.account,
      scope: this.account,
      table: 'proposers',
      table_key: '',
      limit: 200
    }).then(result => result.rows)
  }

  getReviewers () {
    return this.eos.getTableRows({
      json: true,
      code: this.account,
      scope: this.account,
      table: 'reviewers',
      table_key: '',
      limit: 200
    }).then(result => result.rows)
  }

  getCommittees () {
    return this.eos.getTableRows({
      json: true,
      code: this.account,
      scope: this.account,
      table: 'committees',
      table_key: '',
      limit: 200
    }).then(result => result.rows)
  }

  getVotings () {
    return this.eos.getTableRows({
      json: true,
      code: this.account,
      scope: this.account,
      table: 'votings',
      table_key: '',
      limit: 200
    }).then(result => result.rows)
  }

  getWpsGlobal () {
    return this.eos.getTableRows({
      json: true,
      code: this.account,
      scope: this.account,
      table: 'wpsglobal',
      table_key: '',
      limit: 200
    }).then(result => result.rows)
  }
}

export default API
