//该文件用于配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//页面路径
const routes = [{
		//配置的路径
		name: 'default',
		path: '/',
		//路径对应的组件
		component: () => import('./page/index'),
		//元数据
		meta: {
			title: 'hello world'
		}
	},
	//最后一项用于配置404
	{
		path: '*',
		component: () => import('./component/NotFind.vue'),
		meta: {
			title: '404'
		}
	}
];

//路由类型配置
const router = new VueRouter({
	mode: 'history',
	routes
});

//路由守护(更改页面title)
router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
});

export default router;
