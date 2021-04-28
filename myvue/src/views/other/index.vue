<template>
  <div class="c-content">
    <div class="c-myleft">
      <div v-for="item in list" :key="item.index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </div>
    </div>
    <div class="c-myright">
      <router-view />
    </div>
  </div>
</template>
<script src="./index.js">
</script>
<style scoped lang="scss" src="./index.scss">
</style>