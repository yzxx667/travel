
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'style/reset.css'
import 'style/border.css'
import 'style/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 解决300ms延迟
Vue.use(VueAwesomeSwiper)

// new vue   ****本段代码做了变更******
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
