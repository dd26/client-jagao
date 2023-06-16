import axios from 'axios'
import env from '../env'
import { Notify, Loading, Dialog } from 'quasar'

const axiosInstance = axios.create({
  baseURL: env.apiUrl
})

export default async ({ store, Vue }) => {
  Vue.prototype.$axios = axios
  Vue.prototype.$api = axiosInstance

  axiosInstance.interceptors.response.use(function (response) {
    if (response.config.method === 'post') {
      if (response.status === 201) {
        if (response.data.token === undefined) {
          Notify.create({
            color: 'green-4',
            textColor: 'white',
            icon: 'fas fa-check-circle',
            message: 'Record saved successfully!'
          })
        } else {
          localStorage.setItem('JAGAO_SESSION_INFO', JSON.stringify(response))
        }
      }
    }
    return response.data
  }, function (error) {
    console.log(error, 'error')
    if (error.response.status === 401) {
      Notify.create({
        message: 'Incorrect Email and/or Password',
        color: 'warning'
      })
      localStorage.removeItem('JAGAO_SESSION_INFO')
      Loading.hide()
    }

    // cuando es codigo 402, se debe redireccionar al login
    if (error.response.status === 422) {
      Loading.hide()
      Dialog.create({
        title: 'Session expired',
        message: error.response.data.message,
        ok: 'Ok',
        persistent: true
      }).onOk(() => {
        localStorage.removeItem('JAGAO_SESSION_INFO')
        window.location.href = '/#/login'
      })
    }

    // cuando es codigo 403
    if (error.response.status === 403) {
      // verifico si viene el mensaje de error
      if (error.response.data.message) {
        Notify.create({
          message: error.response.data.message,
          color: 'warning'
        })
      }
    }
  })

  axiosInstance.interceptors.request.use(async function (config) {
    store.dispatch('generals/fetchAccessToken')
    const token = JSON.parse(localStorage.getItem('JAGAO_SESSION_INFO'))
    if (token) {
      if (!config.headers) { config.headers = {} }
      config.headers = {
        Authorization: 'Bearer ' + token.api_token
      }
    }
    return config
  }, function (error) {
    Loading.hide()
    return Promise.reject(error)
  })
}

export { axiosInstance }
