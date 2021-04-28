let colorObject = {
  1: "color-red",
  0: "color-gray",
  "-1": "color-green",
};

// 注意：element.classList.remove()、element.classList.add() — ie9及以下不兼容
export const myDirective = {
  myFocus: {
    // 指令的定义
    bind: function(el, binding) {
      el.classList.add(colorObject[binding.value]);
    },
    unbind: function(el, binding) {
      el.classList.remove(colorObject[binding.value]);
    },
  },
};
