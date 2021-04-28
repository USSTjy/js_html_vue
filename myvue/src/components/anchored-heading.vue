
<script>
export default {
  render: function (createElement) {
    var getChildrenTextContent = function (children) {
      return children
        .map(function (node) {
          return node.children
            ? getChildrenTextContent(node.children)
            : node.text;
        })
        .join('');
    };
    // 创建 kebab-case 风格的 ID
    var headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '');
    console.log('dddd', headingId);

    return createElement('h' + this.level, [
      createElement(
        'a',
        {
          attrs: {
            name: headingId,
            href: '#' + headingId,
          },
          style: {
            color: 'red',
          },
          class: {
            foo: true,
            bar: false,
          },
        },
        this.$slots.default
      ),
    ]);
  },
  //   render: function (createElement) {
  //     return createElement('h' + this.level, this.$slots.default);
  //   },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>