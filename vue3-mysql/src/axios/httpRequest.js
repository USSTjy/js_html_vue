import instance from "./index";
import { ElMessage } from "element-plus";

export function httpGet(url, params, method = "get") {
  return new Promise((resolve, reject) => {
    instance
      .request({
        url: url,
        params: params,
        method: method,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        let showMsg = "";
        if (err.request.readyState == 4 && err.request.status == 0) {
          showMsg = "网络请求失败，请稍后再试！";
        }
        ElMessage.error(showMsg);
        reject(err);
      });
  });
}

export function httpPost(url, params, method = "post") {
  return new Promise((resolve, reject) => {
    instance
      .request({
        url: url,
        data: params,
        method: method,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        let showMsg = "";
        if (err.request.readyState == 4 && err.request.status == 0) {
          showMsg = "网络请求失败，请稍后再试！";
        }
        ElMessage.error(showMsg);
        reject(err);
      });
  });
}
