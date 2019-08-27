import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/weui.min.css'
import './assets/css/font-awesome.min.css'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
