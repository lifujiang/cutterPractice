import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'

import Index from './pages/index.vue'
import product from './pages/productCate.vue'

import Test from './test/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: Index,
          prop: true
        },
        {
          path: '/product',
          component: product
        },
        {
          path: '/test',
          component: Test
        }
      ]
    }
  ]
})
