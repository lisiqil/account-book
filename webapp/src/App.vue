<template>
  <Tabbar v-show="showTabbar" />
  <router-view></router-view>
</template>

<script setup>
import Tabbar from "./components/Tabbar.vue";
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const showTabbar = ref(true);
const route = useRoute();

// 不需要展示标签栏的路由
const noShowTabbarRouteList = [
  "/login",
  "/register",
  "/detail",
  "/update-password",
  "/upload-avatar",
];
watchEffect(() => {
  showTabbar.value = !noShowTabbarRouteList.includes(route.path);
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
}

.imagelogo {
  height: 220px;
  width: 220px;
}
</style>
