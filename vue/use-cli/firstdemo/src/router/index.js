import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import haozi from '@/components/haozi'
import com1 from '@/components/Com'
import user from '@/components/User'

Vue.use(Router)

const UserProfile = {
  template: `
    <div>This is User children: Profile</div>
  `
}

const UserPosts = {
  template: `
    <div>This is User children: Posts</div>
  `
}

const UserHome = {
  template : `
   <div>This is defualt route: User Home</div>
  `
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
        default: HelloWorld,
        a: haozi,
        b: com1
      }
    },
    {
      path: '/haozi',
      name: 'haozi',
      component: haozi
    },
    {
      path: '/com1',
      name: 'com1',
      component: com1
    },
    {
      path: '/user/:id/:name',
      name: 'user',
      component: user,
      children: [
        {
           // 当 /user/:id/:name/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/:name/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        },
        {
          // 设置默认的子路由
          path: '',
          component: UserHome
        }
      ]
    }
  ]
})


router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

export default router
