// 随机获取5个数并去重
/**
 * 开发环境
 */
(function () {
  function setFontSize() {
    if (window.devicePixelRatio > 1) {
      var styleNode = document.createElement("style");
      var w = document.documentElement.clientWidth / 16;
      styleNode.innerHTML = "html{ font-size: " + w + "px }";
      document.head.appendChild(styleNode);
    }
  }
  setFontSize();
})();
