import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/home/Home')
const Category = ()=> import('../views/category/Category')
const Cot = ()=> import('../views/cot/Cot')
const Profile = ()=> import('../views/profile/Profile')
// 安装插件
Vue.use(VueRouter)

// 2. 创建路由
const routes = [
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/cot',
		component:Cot
	},
	{
		path:'/profile',
		component:Profile
	},
]

const router = new VueRouter({
	routes,
	mode:'history'
})

// 3. 导出
export default router
