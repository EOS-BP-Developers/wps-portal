export const CONSTANTS = {
  votingDuration: 180
}

export const API_MAP = {
  proposalStatus: [
    { code: 1, text: 'PENDING', color: '#b6b6b6' },
    { code: 2, text: 'REJECTED', color: '#fcb1b3' },
    { code: 3, text: 'ON VOTE', color: '#5efc6d' },
    { code: 4, text: 'FINISHED VOTING', color: '#b6b6b6' },
    { code: 5, text: 'CHECK VOTE', color: '#5bdefb' },
    { code: 6, text: 'CHECKED VOTE', color: '#5bdefb' },
    { code: 7, text: 'APPROVED', color: '#c2b0fc' },
    { code: 8, text: 'COMPLETED', color: '#c2b0fc' }
  ]
}
