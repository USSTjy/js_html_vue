<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-for="(item, index) in questionList" :key="index">
      <div class="js-question">{{ index + 1 }}、{{ item.question }}</div>
      <div class="js-answer">
        <div
          class="js-answer"
          v-if="transAnswer(item.answer).type === 'string'"
        >
          {{ transAnswer(item.answer).data }}
        </div>
        <div v-else>
          <div
            class="js-answer"
            v-for="(ele, eleIndex) in transAnswer(item.answer).data"
            :key="eleIndex"
          >
            ({{ eleIndex + 1 }})、{{ ele }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js">
</script>
<style scoped lang="scss" src="../index.scss">
</style>