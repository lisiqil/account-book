import axios from "axios";

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

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
    Authorization: localStorage.getItem("token") || "",
    "x-csrf-token": getCookie("csrfToken"),
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
