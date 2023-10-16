import $http from "@/utils/axios";

const login = (data) => {
  return $http({ url: "/user/login", method: "post", data });
};

export { login };
