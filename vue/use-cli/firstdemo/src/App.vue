<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    声明router-link路由
    <div id="router-link">
      <router-link to="/">go to index</router-link>
      <router-link to="/haozi">go to /haozi</router-link>
      <router-link to="/com1">gotto /com1</router-link>

      尝试动态路由：
      <!--尝试动态路由：获取用户输入并路由到User模块-->
      <div id="dynamic-router">
        id<input type="text" v-model="id">name <input type="text" v-model="name">
        <router-link :to="userUrl">try dynamic router</router-link>

        尝试编程试路由
        <!--尝试编程试路由-->
        <p @click="routerPush"> try router.push()</p>
      </div>
    </div>
    <!-- 路由匹配到的组件将渲染在这里, 没有name属性则默认为default -->
    <router-view />
    <!-- <haozi></haozi> -->

    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
  </div>
</template>

<script>
// 导入组件
import haozi from './components/haozi'
export default {
  name: 'app',
  components: {
    haozi
  },
  data: function () {
    return {
      id: 'default id',
      name: 'default name'
    }
  },
  computed: {
    userUrl: function () {
      return '/user' + '/'+ this.id + '/'+ this.name
    }
  },
  methods: {
    routerPush: function () {
      this.$router.push('/test')
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>