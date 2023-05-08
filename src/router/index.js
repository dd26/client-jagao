import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import routes from './routes'
import money from 'v-money'
import OtpInput from '@bachdgvn/vue-otp-input'

import env from '../env'
const apiKeyGoogle = env.googleApiKey

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(money, { precision: 2 })
Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.component('v-otp-input', OtpInput)
Vue.use(VueGoogleMaps, {
  load: {
    key: apiKeyGoogle,
    // libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    libraries: 'places,drawing,visualization,routes,geometry,localContext'
    // (as you require)

    // If you want to set the version, you can do so:
    // v: '3.26',
  }
})
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  return Router
}
