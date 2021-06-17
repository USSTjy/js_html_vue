// 随机获取5个数并去重
/**
 * 开发环境
 */
(function () {
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
  window.eventDateList = obj;
})();
