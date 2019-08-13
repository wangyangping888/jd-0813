import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import fenlei from './views/fenlei.vue'
import pinggou from './views/pinggou.vue'
import gouwu from './views/gouwu.vue'
import denglu from './views/denglu.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {

      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/pinggou',
      name: 'pinggou',
      component: pinggou
    },
    {
      path: '/gouwu',
      name: 'gouwu',
      component: gouwu
    },
    {
      path: '/denglu',
      name: 'denglu',
      component: denglu
    }
  ]
})
