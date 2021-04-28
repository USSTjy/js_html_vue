<template>
  <div>
    <span>
      <slot :user="user" :testData="testData">
        {{ user.lastName }}
        <div>testData</div>
      </slot>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    user: Object,
    testData: String,
  },
  data() {
    return {};
  },
};
</script>