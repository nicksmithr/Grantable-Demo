// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import localforage from 'localforage'
// import VueAnalytics from 'vue-analytics'
import { store } from './store'
import VueHighcharts from 'vue-highcharts'
var VueFire = require('vuefire')

Vue.use(VueHighcharts)

const options = {
  color: 'rgb(255, 238, 136)',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'bottom',
  inverse: false
}

Vue.config.productionTip = false
Vue.use(VueProgressBar, options)
Vue.use(VueFire)

localforage.config({
  name: 'App.Grantable'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
