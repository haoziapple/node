import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormDemo from '@/components/FormDemo'
import TableDemo from '@/components/TableDemo'
import Full from '@/containers/Full'

import AllSimpleJob from '@/views/AllSimpleJob'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Full,
      children: [
        {
          path: 'allSimpleJob',
          component: AllSimpleJob
        }
      ]

    },
    {
      path: '/formDemo',
      name: 'formDemo',
      component: FormDemo
    },
    { path: '/tableDemo/:id', name: 'tableDemo', component: TableDemo },
  ]
})
