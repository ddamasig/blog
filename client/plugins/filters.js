import Vue from 'vue'
import moment from 'moment'

Vue.filter('getAge', (value) => {
  const age = moment().diff(moment(value), 'seconds')

  if (age < 60) {
    return `few seconds ago`
  } else if (age < 3600) {
    return `${(age / 60).toFixed(0)} minutes ago`
  } else if (age < 86400) {
    return `${(age / 60 / 60).toFixed(0)} hours ago`
  }
  return `${(age / 60 / 60 / 24).toFixed(0)} days ago`
})
