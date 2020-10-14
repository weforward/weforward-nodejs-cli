<template>
	<h1>hello world</h1>
</template>

<script>
export default {
	data() {
		return {
			goods: null,
			mobile: ''
		};
	},
	mounted() {
		// this.searchGoods();
	},
	methods: {
		/**
		 * 数据请求示例：搜索商品
		 */
		async searchGoods() {
			let data = await this.$wf.post('train?method=search_goods', {
				mobile: this.mobile,
				state: 1,
				keyword: ''
			});
			this.goods = data;
		},
		/**
		 * 数据请求示例：图片上传示例
		 * @param {Object} goodsId 商品id
		 * @param {Object} file 图片 File或Blob 对象
		 */
		uploadPicture(goodsId, file) {
			let params = {
				mobile: this.mobile,
				id: goodsId
			};
			this.$wf.post('train?method=search_goods', params, file);
		}
	}
};
</script>
