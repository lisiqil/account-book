import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // 定义你的路由配置
  {
    path: "/hello",
    name: "HelloComponent",
    component: () => import("@/views/hello/HelloComponent.vue"),
  },
  {
    path: "/about",
    name: "AboutComponent",
    component: () => import("@/views/about/AboutComponent.vue"),
  },

  // 登录页
  {
    path: "/login",
    component: () => import("@/views/login/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
