import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:1337",
  timeout: 3000,
  headers: { "Content-Type": "application/json;charset=UTF-8;" },
});
// 拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应器
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
