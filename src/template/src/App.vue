<template>
	<!-- 业务页面展示 -->
	<RouterView></RouterView>
</template>

<script>
import Vue from 'vue';
//路由配置
import router from './router.js';
//微服务数据请求插件
//使用文档参考https://www.npmjs.com/package/weforward-protocol
import wf from 'weforward-protocol';
Vue.prototype.$wf = wf;
export default {
	name: 'App',
	router: router
};
</script>
