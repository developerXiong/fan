// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import $ from 'jquery'
import mock from './mock/mock'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/iconfont.css'
import '@/assets/styles/main.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(mock)
Vue.prototype.api = 'http://192.168.0.134:8088/';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
}).$mount('#app')
