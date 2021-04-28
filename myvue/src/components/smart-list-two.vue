<template functional>
  <button
    v-bind="data.attrs"
    :class="data.staticClass"
    :style="data.staticStyle"
    v-on="listeners"
  >
    <!-- 
        v-bind="data.attrs"  相当于绑定属性，
        :class="data.staticClass"    :style="data.staticStyle" 绑定样式
        v-on="listeners"绑定事件
   -->
    <slot name="header" />
    <slot />
  </button>
</template>
<script>
export default {
  props: {},
};
</script>