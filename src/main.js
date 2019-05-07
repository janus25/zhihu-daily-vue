// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'babel-polyfill' // 兼容安卓低版本白屏问题
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 移动端300ms点击延迟
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
