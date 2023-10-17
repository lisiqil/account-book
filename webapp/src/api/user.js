import $http from "@/utils/axios";

const login = (data) => {
  return $http({
    url: "/user/login",
    method: "post",
    data,
  });
};

// 注册
const register = (data) => {
  return $http({
    url: "/user/register",
    method: "post",
    data,
  });
};

// 获取用户信息
const getUserInfo = () => {
  return $http({
    url: "/user/getUser",
    method: "get",
  });
};

// 编辑用户信息
const editUserInfo = (data) => {
  return $http({
    url: "/user/editUser",
    method: "put",
    data,
  });
};

// 修改密码
const updatePassword = (data) => {
  return $http({
    url: "/user/updatepwd",
    method: "put",
    data,
  });
};

export { login, register, getUserInfo, editUserInfo, updatePassword };
