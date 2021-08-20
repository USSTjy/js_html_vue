<template>
	<div>
		<div class="flex-row" @click="changeShow">
			<i v-show="isShow" class="el-icon-caret-bottom">bottom</i>
			<i v-show="!isShow" class="el-icon-caret-right">right</i>
			<div>{{ title }}</div>
			<div class="line-style"></div>
		</div>
		<div v-show="isShow">
			<slot name="content"></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			isShow: false,
		};
	},
	methods: {
		changeShow() {
			this.isShow = !this.isShow;
		},
	},
};
</script>
<style scoped>
.flex-row {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.line-style {
	flex: 1;
	height: 0.1rem;
	background: #ccc;
	margin-left: 0.5rem;
}
</style>
