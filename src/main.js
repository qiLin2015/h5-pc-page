// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Index from './Index'
import router from './router'

Vue.config.productionTip = false
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '@/assets/reset.css'
// require styles
import 'swiper/css/swiper.min.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Index },
  template: '<Index/>'
})
