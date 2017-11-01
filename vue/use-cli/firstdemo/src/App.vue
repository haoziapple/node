<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<router-view/>-->
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