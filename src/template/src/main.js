//vue框架 文档地址 https://vue3js.cn/
import {
	createApp
} from 'vue';
import './main.css'
import router from './router.js';
import App from './App.vue';

const app = createApp(App);
//微服务数据请求插件
//使用文档参考https://www.npmjs.com/package/weforward-protocol
import wf from 'weforward-protocol';
router.beforeEach((to, from, next) => {
	if (to.meta.needauth && !wf.isLogined()) {
		let s = '';
		for (var index in to.query) {
			s += index + '=' + to.query[index] + '&'
		}
		next({
			name: 'login',
			query: {
				'ref': to.path + '?' + s
			}
		})
	} else {
		if (to.meta.title) {
			document.title = to.meta.title;
		}
		next();
	}
});
router.afterEach(() => {
});

app.config.globalProperties.$wf = wf;
app.use(router);
app.mount('#app');