function route(pathname, method, params) {
  let api = pathname.split("/")[1];
  let result = {
    data: [],
    msg: "",
    code: 0,
  };

  if (api === "login") {
    if (method !== "POST") {
      result.code = "100"; //请求方式不对、
      result.msg = "请求方式不对";
    }
    // params.toString(),
    //   JSON.stringify(params),
    //   JSON.parse(JSON.stringify(params)).toString(),
    //   JSON.parse(JSON.stringify(params.toString())),
    console.log("ddddd", bufff);
    // if (
    //   JSON.stringify(params).userName !== "jy" &&
    //   JSON.stringify(params).userPsd != "123456"
    // ) {
    //   result.code = "001"; // 用户或密码错误
    //   result.msg = "用户或密码错误";
    // }
    result.msg = "登录成功";
  }

  return {
    data: JSON.stringify(result),
    dataType: "application/json;charset=UTF8",
  };
}

exports.route = route;
