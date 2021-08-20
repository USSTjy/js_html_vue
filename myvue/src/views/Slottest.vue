<template>
	<div>
		<div>插槽内容{{ msg }}</div>
		<p>
			在2。6。0中，vue为具名插槽和作用域引入了一个新的统一的语法（v-slot指令）。它取代了slot和slot-scope这两个目前已被废弃但未被移除且仍在Vue文档中。
		</p>
		<h2></h2>
		<div>
			<SlotBefore url="/">
				<template slot="header">
					<div>header</div>
				</template>
				<div>main</div>
				<template slot="footer">
					<div>footer</div>
				</template>
			</SlotBefore>
		</div>
		<h2>具名插槽</h2>
		<SlotBefore url="/">
			<template v-slot:header>
				<div>header</div>
			</template>
			<div>main</div>
			<template v-slot:footer>
				<div>footer</div>
			</template>
		</SlotBefore>
		<div class="c-kadfa">
			注意：v-slot只能添加在<template></template>上（只有一种例外情况）
		</div>
		<SlotBefore url="/">
			<template v-slot:header>
				<div>header</div>
			</template>
			<template v-slot:default>
				<div>main</div>
			</template>
			<template v-slot:footer>
				<div>footer</div>
			</template>
		</SlotBefore>
		<h2>作用域插槽</h2>
		<SlotAfter :user="user" testData="testData2">
			<template v-slot:default="slotProps">
				<div>{{ slotProps.user.firstName }} + {{ slotProps.testData }}</div>
			</template>
		</SlotAfter>

		<!-- <h2>独占默认插槽</h2> -->
		<div class="c-kadfa">
			注意：当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把
			v-slot 直接用在组件上：
		</div>
		<SlotAfter :user="user" testData="testData3" v-slot:default="slotProps">
			<div>{{ slotProps.user.firstName }} + {{ slotProps.testData }}</div>
		</SlotAfter>

		<SlotAfter :user="user" testData="testData4" v-slot="slotProps">
			<div>{{ slotProps.user.firstName }} + {{ slotProps.testData }}</div>
		</SlotAfter>

		<SlotCom></SlotCom>
		<IsFold title="标题4" ref="fold4">
			<template slot="content">
				<div>footesdfsfsdfsdfsfr</div>
			</template>
		</IsFold>
		<IsFold title="标题5" ref="fold5">
			<template slot="content">
				<div>footesdfsfsdfsdfsfr</div>
			</template>
		</IsFold>
		<div @click="handleClick">切换</div>
	</div>
</template>
<script>
import SlotBefore from '@/components/SlotBefore.vue';
import SlotAfter from '@/components/SlotAfter.vue';
import SlotCom from './slotComponents/index.vue';
import IsFold from './slotComponents/IsFold.vue';

export default {
	components: {
		SlotBefore,
		SlotAfter,
		SlotCom,
		IsFold,
	},
	data() {
		return {
			msg: 'sssss',
			user: {
				firstName: 'yan',
				lastName: 'jiang',
			},
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init(val) {
			console.log('ddddddd', val);
		},
		handleClick() {
			this.$refs.fold5.isShow = true;
			this.$refs.fold4.isShow = true;
		},
	},
};
</script>
<style scoped lang="scss" src="./index.scss"></style>
