import Vue from 'vue'
import env from '../env'

Vue.prototype.$getUserInfo = async function () {
  const res = await this.$api.get('user')
  return res
}

Vue.prototype.$api_url = function () {
  return env.apiUrl
}
