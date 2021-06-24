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
  window.addEventListener(
    "resize",
    function () {
      setFontSize();
    },
    false
  );
  let obj = {};
  for (let i = 0; i < 30; i++) {
    let item = "2021-6-" + (i + 1);
    obj[item] = {
      startInfo: {
        date: "09:00上午",
        person: "高智强",
        reason: "原因" + (i + 1),
        eventName: "开主题会议" + (i + 1),
        afterDate: "已超过40分钟",
        isDelay: true,
      },
      endInfo: {
        date: "15:00下午",
        person: "高智强",
        reason: "原因2" + (i + 1),
        eventName: "开主题会议22" + (i + 1),
        afterDate: "还有30分钟",
        isDelay: false,
      },
    };
  }
  function setData(num) {
    return num;
  }
  window.eventDateList = obj;
  window.setData = setData;
})();
