<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-for="(item, index) in questionList" :key="index">
      <div class="js-question">{{ index + 1 }}、{{ item.question }}</div>
      <div class="js-answer">{{ item.answer }}</div>
    </div>
  </div>
</template>
<script src="./index.js">
</script>
<style scoped lang="scss" src="../index.scss">
</style>