<script>
export default {
  functional: true,
  props: {
    items: {
      type: Array,
      required: true,
    },
    isOrdered: Boolean,
  },
  render: function (createElement, context) {
    var EmptyList = {
      /* ... */
    };
    var TableList = {
      /* ... */
    };
    var OrderedList = {
      /* ... */
    };
    var UnorderedList = {
      /* ... */
    };
    function appropriateListComponent() {
      var items = context.props.items;
      if (items.length === 0) return EmptyList;
      if (typeof items[0] === 'object') return TableList;
      if (context.props.isOrdered) return OrderedList;
      return UnorderedList;
    }
    // console.log(
    //   'dddddd',
    //   appropriateListComponent(),
    //   context.data,
    //   context,
    //   'forst=====',
    //   this
    // );
    // return createElement(
    //   appropriateListComponent(),
    //   context.data,
    //   context.children
    // );
    return createElement(
      'button',
      {
        attrs: context.props,
        on: {
          click: context.listeners.click,
        },
        style: context.data.staticStyle,
        class: context.data.staticClass,
        domProps: {
          innerHTML: 'baz',
        },
      },
      context.children
    );
  },
};
</script>