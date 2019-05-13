import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Detail from '@/pages/Newsdetail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/newsDetail/:id',
    name: 'Detail',
    component: Detail
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
