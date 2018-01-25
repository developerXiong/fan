import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
import one from '@/components/one'
import two from '@/components/two'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      children:[
        {
          path: '/one',
          name: '一',
          component: one,
        },
        {
          path: '/two',
          name: '二',
          component: two,
        }
      ]
    }
  ]
})
