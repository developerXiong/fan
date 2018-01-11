import Vue from 'vue'
import Layout from './components/layout.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import mock from './mock/mock'
import IndexPage from './pages/index.vue'
import DetailPage from './pages/detail.vue'
import DetailAnaPage from './pages/detail/analysis.vue'
import DetailCouPage from './pages/detail/count.vue'
import DetailForPage from './pages/detail/forecast.vue'
import DetailPubPage from './pages/detail/publish.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(mock)
let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/count',
      children: [
        {
          path: 'analysis',
          component: DetailAnaPage
        },
        {
          path: 'count',
          component: DetailCouPage
        },
        {
          path: 'forecast',
          component: DetailForPage
        },
        {
          path: 'publish',
          component: DetailPubPage
        }
      ]
    }
  ]
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
