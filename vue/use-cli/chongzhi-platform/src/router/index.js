import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');

const adminRole = r => require.ensure([], () => r(require('@/page/adminRole')), 'adminRole');
const adminUser = r => require.ensure([], () => r(require('@/page/adminUser')), 'adminUser');
const changePwd = r => require.ensure([], () => r(require('@/page/changePwd')), 'changePwd');
const channelLevel = r => require.ensure([], () => r(require('@/page/channelLevel')), 'channelLevel');
const balanceWarn = r => require.ensure([], () => r(require('@/page/balanceWarn')), 'balanceWarn');
const stockWarn = r => require.ensure([], () => r(require('@/page/stockWarn')), 'stockWarn');
const itemCategory = r => require.ensure([], () => r(require('@/page/itemCategory')), 'itemCategory');
const publishItem = r => require.ensure([], () => r(require('@/page/publishItem')), 'publishItem');
const adminItem = r => require.ensure([], () => r(require('@/page/adminItem')), 'adminItem');
const channelUser = r => require.ensure([], () => r(require('@/page/channelUser')), 'channelUser');
const adminOrder = r => require.ensure([], () => r(require('@/page/adminOrder')), 'adminOrder');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},
		{
			path: '/adminRole',
			component: adminRole,
			meta: ['系统管理', '角色管理'],
		},
		{
			path: '/adminUser',
			component: adminUser,
			meta: ['系统管理', '用户管理'],
		},
		{
			path: '/changePwd',
			component: changePwd,
			meta: ['系统管理', '修改密码'],
		},
		{
			path: '/channelLevel',
			component: channelLevel,
			meta: ['基础数据', '下游用户等级设置'],
		},
		{
			path: '/balanceWarn',
			component: balanceWarn,
			meta: ['基础数据', '余额告警值设置'],
		},
		{
			path: '/stockWarn',
			component: stockWarn,
			meta: ['基础数据', '库存不足告警值设置'],
		},
		{
			path: '/itemCategory',
			component: itemCategory,
			meta: ['基础数据', '商品分类设置'],
		},
		{
			path: '/publishItem',
			component: publishItem,
			meta: ['商品管理', '商品发布'],
		},
		{
			path: '/adminItem',
			component: adminItem,
			meta: ['商品管理', '商品管理'],
		},
		{
			path: '/channelUser',
			component: channelUser,
			meta: ['下游用户管理', '下游用户管理'],
		},
		{
			path: '/adminOrder',
			component: adminOrder,
			meta: ['客服管理', '订单管理'],
		}]
	}
]

export default new Router({
  routes,
	strict: process.env.NODE_ENV !== 'production',
})
