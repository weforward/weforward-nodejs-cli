//该文件用于配置路由
//该文件用于配置路由
import {
	createRouter,
	createWebHistory
} from 'vue-router';

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
		path: '/:pathMatch(.*)*',
		component: () => import('./component/NotFind.vue'),
		meta: {
			title: '404'
		}
	}
];

//路由类型配置
const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router;
