import Vue from 'vue'
import { date } from 'quasar'
import env from '../env'

Vue.prototype.$getUserInfo = async function () {
  const res = await this.$api.get('user')
  return res
}

Vue.prototype.$api_url = function () {
  return env.apiUrl
}

Vue.prototype.$formatPrice = function (value) {
  const val = (value / 1).toFixed(2).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

Vue.prototype.$getNotifications = async function () {
  const res = await this.$api.get('notifications')
  return res
}

Vue.prototype.$formatDate = function (dateFormat, format) {
  const formattedString = date.formatDate(dateFormat, format)
  return formattedString
}

Vue.prototype.$googleApiKey = function () {
  return env.googleApiKey
}
