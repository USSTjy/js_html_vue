<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ title }}--{{ storeData }}</div>
    <div>
      <button @click="handleClick">test-button</button>
      test---{{ testData }}
    </div>
    <div>
      <button @click="handleClickTwo">bookButton</button>
      book----{{ bookData }}
    </div>

    <div>store数据的第二种引入方式</div>
    <div>{{ twoRootData }}/======={{ twoBookData }}/====={{ twoTestData }}</div>
    <div>{{ myModuleData }}</div>
  </div>
</template>
<script src="./about.js">
</script>