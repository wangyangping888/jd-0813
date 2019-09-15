import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import './assets/css/weui.min.css'
import './assets/css/font-awesome.min.css'
import QS from 'qs'



Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
