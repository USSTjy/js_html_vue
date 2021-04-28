<template>
  <div>{{ mixinsMsg }}</div>
</template>
<script>
import * as mixins from '../mixins/mixin-test';
export default {
  mixins: [mixins.myMixin(1, 'hello')],
  data() {
    return {
      msg: 'mixins---hello',
      testmsg: 'ddddddd',
      mixinsMsg: '',
    };
  },
};
</script>