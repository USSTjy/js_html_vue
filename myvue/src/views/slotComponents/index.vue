<template>
	<div>
		<IsFold title="标题1">
			<template slot="content">
				<div>header</div>
			</template>
		</IsFold>

		<IsFold title="标题2">
			<template slot="content">
				<div>main</div>
			</template>
		</IsFold>
		<IsFold title="标题3">
			<template slot="content">
				<div>footesdfsfsdfsdfsfr</div>
			</template>
		</IsFold>
	</div>
</template>
<script>
import IsFold from './IsFold.vue';
export default {
	components: {
		IsFold,
	},
	props: {},
	data() {
		return {};
	},
	methods: {},
};
</script>
<style scoped></style>
