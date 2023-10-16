import axios from "axios";

// 创建http实例
const $http = axios.create({
  baseURL: "/api-ab",
  timeout: 6000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 请求拦截
$http.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  config.headers = {
    token: localStorage.getItem("token") || "",
  };
  return config;
});

// 处理请求的返回值
$http.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(err);
  }
);

export default $http;
