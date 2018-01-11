// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import axios from 'axios'
import VueResource from 'vue-resource'
import $ from 'jquery'
import mock from './mock/mock'
import IndexPage from './pages/index.vue'
import LoginPage from './pages/login.vue'
import HomePage from './pages/home.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(mock)
Vue.config.productionTip = false

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      component:LoginPage
    },
    {
      path:'/index',
      component:IndexPage,
      children:[
        {
          path:'/index/home',
          name:'home',
          component:HomePage
        }
      ]
    }
  ]
})
// Vue.prototype.HOST='/api'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
