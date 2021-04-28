<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <a :href="url">
        <slot></slot>
      </a>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
<script>
export default {
  props: {
    url: String,
  },
};
</script>
