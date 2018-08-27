import moment from 'moment'

export function parseDate(dateString) {
  // Currently not sure what format of date needs to be returned, need to update once confirmed
  return moment(dateString);
}

export function getDaysFromToday(dateString, numberOfDays) {
  return moment(dateString).add(numberOfDays, 'd').diff(moment(), 'd');
}
