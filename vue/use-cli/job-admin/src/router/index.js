import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormDemo from '@/components/FormDemo'
import TableDemo from '@/components/TableDemo'
import Full from '@/containers/Full'

import FailSimpleJob from '@/views/FailSimpleJob'
import UnhandleSimpleJob from '@/views/UnhandleSimpleJob'
import SuccessSimpleJob from '@/views/SuccessSimpleJob'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Full,
      children: [
        {
          path: 'failSimpleJob',
          component: FailSimpleJob
        },
        {
          path: 'unhandleSimpleJob',
          component: UnhandleSimpleJob
        },
        {
          path: 'successSimpleJob',
          component: SuccessSimpleJob
        },
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
