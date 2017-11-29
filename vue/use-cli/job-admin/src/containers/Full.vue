<template>
    <div class="layout">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
                <!-- 侧边选项栏 -->
                <Sidebar></Sidebar>
            </Col>
            <Col :span="spanRight">
                <div class="layout-header">
                    <Button type="text">
                        <Icon type="gear-b" size="32"></Icon>
                    </Button>
                    <Card>
                        <div style="text-align:center">
                            <h3>定时任务管理平台</h3>
                        </div>
                    </Card>
                    <!-- 顶部导航栏 -->
                    <Navbar></Navbar>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">
                      <router-view></router-view>
                    </div>
                </div>
                <div class="layout-copy">
                    2017 &copy; haozixiaowang
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
export default {
  name: "full",
  components: {
    Navbar: Navbar,
    Sidebar: Sidebar
  },
  data() {
    return {
      spanLeft: 3,
      spanRight: 21
    };
  },
  methods: {
   
  },
  filters: {
    
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-content {
  min-height: 100vh;
  margin: 15px;
  overflow: hidden;
  background: #464c5b;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  background: #464c5b;
  min-height: 600px;
}
.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  display: flex;
}

.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-hide-text .layout-text {
  display: none;
}
.ivu-col {
  transition: width 0.2s ease-in-out;
}
</style>