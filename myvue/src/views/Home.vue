<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <h2>函数式组件</h2>
    <div>
      <SmartList
        :items="list"
        @click="handleClick"
        id="smart-list"
        style="width: 200px"
        class="color-red"
        name="smart-list"
        value="haha"
        data-value="datavalue"
        >fdfdfd</SmartList
      >
    </div>
    <h2>SmartListTwo</h2>
    <SmartListTwo
      class="color-gray"
      id="smart-list-two"
      style="color: #ccc"
      data-value="two-button"
      name="smart-list-two"
      value="twobutton"
      @click="handleClickTwo"
    >
      <!-- <template v-slot:header> twoButton </template> -->
      <template v-slot:header> twoButton </template>
    </SmartListTwo>
    <h2>过滤器</h2>
    <div>
      <div :id="rawId | formatId">{{ message | filterMessage }}</div>
      <div>{{ filters | filterParams('args1111', message) }}</div>
    </div>

    <h2>图片</h2>
    <img src="./favicon.png" width="100px" height="100px" />
  </div>
</template>

<script src="./home.js"></script>
