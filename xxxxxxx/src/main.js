// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
// import axios from 'axios'
import VueResource from 'vue-resource'
import $ from 'jquery'
import mock from './mock/mock'
require('layui-src/src/layui')
require('layui-src/src/css/layui.css')

import IndexPage from './pages/index.vue'
import LoginPage from './pages/login.vue'
import HomePage from './pages/right/home.vue'
import userManagement from './pages/right/userManagement.vue'
import roleManagement from './pages/right/roleManagement.vue'
import systemMenu from './pages/right/systemMenu.vue'
import departManagement from './pages/right/departManagement.vue'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(mock)
Vue.config.productionTip = false
layui.config({
  dir:'/static/layui/',
  version:false,
  debug:true,
  base:''
})

export let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      component:LoginPage
    },
    {
      path:'/loginPage',
      component:LoginPage
    },
    {
      path:'/index',
      component:IndexPage,
      // redirect :{name:'home'},
      children:[
        {
          path:'/index/home',
          name:'home',
          component:HomePage
        },
        {
          path:'/index/userManagement',
          name:'userManagement',
          component:userManagement
        },
        {
          path:'/index/roleManagement',
          name:'roleManagement',
          component:roleManagement
        },
        {
          path:'/index/systemMenu',
          name:'systemMenu',
          component:systemMenu
        },
        {
          path:'/index/departManagement',
          name:'departManagement',
          component:departManagement
        }
      ]
    }
  ]
})

layui.use(['layer','form','element','table','tree'],function () {
  var layer = layui.layer,
    form = layui.form,
    element = layui.element,
    table = layui.table,
    tree = layui.tree
  //将全局使用的组件挂载在window上面，以便全局调用
  window.$layer = layer
  window.$layform = form
  window.$layele = element
  window.$laytab = table
  window.$laytree = tree
  window.$lay = layui
  // Vue.http.options.emulateJSON = true;
  // Vue.http.options.crossOrigin = true;
  // Vue.http.options.emulateHTTP = true;
  Vue.http.headers.common['Authorization'] = sessionStorage.getItem('UserInfo')
// 也可以在拦截器里动态设置
//   Vue.http.interceptors.push((request, next)  =>{
//     var a= true;
//     if(a){
//       request.headers.AuthKey = 'ssh';
//     }
//     console.log(request.headers)
//
//     next((response) => {
//       console.log(response.status)
//       return response
//     });
//
//   });

  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  }).$mount('#app')
})

