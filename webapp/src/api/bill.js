import $http from "@/utils/axios";

// 增加账单
const addBill = (data) => {
  return $http({
    url: "/bill/add",
    method: "post",
    data,
  });
};

// 获取账单列表
const getBillList = (data) => {
  const { date, page, page_size, type_id } = data;
  return $http({
    url: `/bill/list?date=${date}&page=${page}&page_size=${page_size}&type_id=${type_id}`,
    method: "get",
  });
};

// 获取账单详情
const getBillDetail = (id) => {
  return $http({
    url: `/bill/detail?id=${id}`,
    method: "get",
  });
};

// 更新账单
const updateBill = (data) => {
  return $http({
    url: "/bill/update",
    method: "put",
    data,
  });
};

// 删除账单
const deleteBill = (id) => {
  return $http({
    url: `/bill/delete?id=${id}`,
    method: "delete",
  });
};

// 获取整月账单统计数据
const getMonthBillData = (date) => {
  return $http({
    url: `/bill/date?date=${date}`,
    method: "get",
  });
};

export {
  addBill,
  getBillList,
  getBillDetail,
  updateBill,
  deleteBill,
  getMonthBillData,
};
