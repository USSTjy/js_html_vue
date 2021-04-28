<template>
  <div>
    directives
    <div
      class="c-acafafs"
      v-myDirective="item.value"
      v-for="item in list"
      :key="item.index"
    >
      {{ item.value }}
    </div>

    <div>
      渲染函数render
      <AnchoredHeading :level="1">hello WORLD!!</AnchoredHeading>
    </div>
  </div>
</template>
<script>
import * as myDirectives from '../directives';
import AnchoredHeading from '../components/anchored-heading.vue';
export default {
  directives: { myDirective: myDirectives.myDirective.myFocus },
  components: { AnchoredHeading },
  data() {
    return {
      num: 300,
      list: [
        {
          value: 1,
        },
        {
          value: 0,
        },
        {
          value: -1,
        },
      ],
    };
  },
};
</script>
<style scoped lang="scss" src="./index.scss">
</style>
