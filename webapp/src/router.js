import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // 登录页
  {
    path: "/login",
    component: () => import("@/views/login/LoginView.vue"),
  },

  // 定义路由配置
  {
    path: "/",
    component: () => import("@/views/bill/BillView.vue"),
    meta: { checkAuth: true },
  },
  {
    path: "/count",
    component: () => import("@/views/count/CountView.vue"),
    meta: { checkAuth: true },
  },
  {
    path: "/user",
    component: () => import("@/views/user/UserView.vue"),
    meta: { checkAuth: true },
  },

  // 未定义路由重定向
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.checkAuth) {
    // 是否需要验证 token
    if (localStorage.getItem("token")) {
      // 是否存在 token
      next();
    } else {
      next({
        path: "/login", // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: { redirect: to.fullPath },
      });
    }
  } else {
    // 不需要 token，继续跳转
    next();
  }
});

export default router;
