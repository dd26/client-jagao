import Vue from 'vue'
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
