import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FormDemo from '@/components/FormDemo'
import TableDemo from '@/components/TableDemo'
import Full from '@/containers/Full'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Full,

    },
    {
      path: '/formDemo',
      name: 'formDemo',
      component: FormDemo
    },
    { path: '/tableDemo/:id', name: 'tableDemo', component: TableDemo },
  ]
})
