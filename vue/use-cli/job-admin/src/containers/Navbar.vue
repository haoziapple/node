<template>
<div class="head-navbar">
    <Menu mode="horizontal" :theme="theme1" active-name="job-stats" @on-select="route">
        <Submenu name="job-stats">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                任务查看
            </template>
            <MenuGroup title="一般任务">
                <MenuItem name="all">全部</MenuItem>
                <MenuItem name="unhandle">未执行任务</MenuItem>
                <MenuItem name="success">已执行任务</MenuItem>
                <MenuItem name="fail">失败任务</MenuItem>
            </MenuGroup>
            <MenuGroup title="Cron任务">
                <MenuItem name="cron">
                    全部
                </MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="user-admin">
            <Icon type="ios-people"></Icon>
            用户管理
        </MenuItem>
        <MenuItem name="service-info">
            <Icon type="settings"></Icon>
            服务详情
        </MenuItem>
    </Menu>
    <!-- <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup> -->
</div>
</template>
<script>
export default {
  name: "navbar",
  data() {
    return {
      theme1: "primary"
    };
  },
  methods: {
    route(name) {
      console.log(name);
      if (name == "all") {
        this.$router.push({ path: "/allSimpleJob" });
      }
    }
  }
};
</script>