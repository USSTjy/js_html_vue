function route(pathname, method, params) {
  let api = pathname.split("/")[1];
  let result = {
    data: [],
    msg: "",
    code: 0,
  };

  if (api === "login") {
    result.msg = "登录成功";
    if (method !== "POST") {
      result.code = "100"; //请求方式不对、
      result.msg = "请求方式不对";
    }
    if (
      params &&
      (JSON.parse(params).userName !== "jy" ||
        JSON.parse(params).userPsd != "123456")
    ) {
      result.code = "001"; // 用户或密码错误
      result.msg = "用户或密码错误";
    }
  }

  return {
    data: JSON.stringify(result),
    dataType: "application/json;charset=UTF8",
  };
}

exports.route = route;
