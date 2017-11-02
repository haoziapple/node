<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div id="router-link">
      <router-link to="/">go to index</router-link>
      <router-link to="/haozi">go to /haozi</router-link>
    </div>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>
    <haozi></haozi>
  </div>
</template>

<script>
// 导入组件
import haozi from './components/haozi'
export default {
  name: 'app',
  components: {
    haozi
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