<template>
    <Menu theme="dark" width="auto">
        <div class="layout-logo-left">
            <img src="../../static/img/logo.jpg" alt="" style="width:100%;height:100%">
        </div>
        <Submenu name="basic-concept">
                <template slot="title">
                    <Icon type="ios-navigate" :size="14"></Icon>
                    基本概念
                </template>
                <MenuItem name="job-mode">任务形式</MenuItem>
                <MenuItem name="simple-job">简单任务</MenuItem>
                <MenuItem name="cron-job">Cron任务</MenuItem>
        </Submenu>
        <Submenu name="how-to-use">
            <template slot="title">
                <Icon type="ios-analytics" :size="14"></Icon>
                如何使用
            </template>
            <MenuItem name="add-job">新建任务</MenuItem>
            <MenuItem name="remind">注意事项</MenuItem>
            <MenuItem name="other">其他</MenuItem>
        </Submenu>
    </Menu>
</template>
<script>
export default {
  name: "sidebar",
  data () {
      return {
          
      }
  }
}
</script>
<style scoped>
.layout-logo-left {
  width: 90%;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
</style>

