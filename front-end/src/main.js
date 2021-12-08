import Vue from 'vue'
import App from './App.vue'
import router from './router'
import sportData from './sportData.js'

Vue.config.productionTip = false

let data = {
  staticSportData: sportData
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
