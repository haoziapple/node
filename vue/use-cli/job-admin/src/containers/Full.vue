<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 100vh;
  margin: 15px;
  overflow: hidden;
  background: #ff0000;
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
.layout-logo-left {
  width: 90%;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
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
<template>
    <div class="layout">
        <Row type="flex">
            <Col :span="spanLeft" class="layout-menu-left">
                <Menu theme="dark" width="auto">
                    <div class="layout-logo-left">
                      <img src="../../static/img/logo.jpg" alt="" style="width:100%;height:100%">
                    </div>
                    <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate" :size="iconSize"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                    </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad" :size="iconSize"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics" :size="iconSize"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                </Menu>
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
                    <navbar></navbar>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">Index</BreadcrumbItem>
                        <BreadcrumbItem href="#">Apps</BreadcrumbItem>
                        <BreadcrumbItem>App</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">Content</div>
                </div>
                <div class="layout-copy">
                    2017 &copy; haozixiaowang
                </div>
            </Col>
        </Row>
    </div>
</template>
<script>
import navbar from "./Navbar";
export default {
  name: "full",
  components: {
    navbar: navbar
  },
  data() {
    return {
      spanLeft: 3,
      spanRight: 21
    };
  },
  computed: {
    iconSize() {
      return this.spanLeft === 3 ? 14 : 24;
    }
  },
  methods: {
    toggleClick() {
      if (this.spanLeft === 3) {
        this.spanLeft = 2;
        this.spanRight = 22;
      } else {
        this.spanLeft = 3;
        this.spanRight = 21;
      }
    }
  },
  filters: {
    
  }
};
</script>
