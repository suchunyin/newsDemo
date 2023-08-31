import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/pages/news')
    },
    {
      path: '/beijing',
      name: 'beijing',
      component: () => import('@/pages/beijing')
    }
  ]
})
