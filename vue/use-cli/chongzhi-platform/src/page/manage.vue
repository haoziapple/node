<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-setting"></i>系统管理</template>
						<el-menu-item index="adminRole">角色管理</el-menu-item>
						<el-menu-item index="adminUser">用户管理</el-menu-item>
						<el-menu-item index="changePwd">修改密码</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-document"></i>基础数据</template>
						<el-menu-item index="channelLevel">下游用户等级设置</el-menu-item>
						<el-menu-item index="balanceWarn">余额告警值设置</el-menu-item>
						<el-menu-item index="stockWarn">库存不足告警值设置</el-menu-item>
						<el-menu-item index="itemCategory">商品分类设置</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>商品管理</template>
						<el-menu-item index="publishItem">商品发布</el-menu-item>
						<el-menu-item index="adminItem">商品管理</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-edit"></i>下游用户管理</template>
						<el-menu-item index="channelUser">下游用户管理</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-view"></i>客服管理</template>
						<el-menu-item index="adminOrder">订单管理</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<div>
				<head-top></head-top>
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
				</div>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
	import headTop from '../components/headTop'
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
		components: {
    		headTop,
    	}
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{
		
	}
</style>
