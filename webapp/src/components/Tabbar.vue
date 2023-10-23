<script setup>
import { ref } from "vue";
const activeTab = ref("bill");
</script>

<template>
  <van-tabbar class="tab" v-model="activeTab" route>
    <van-tabbar-item icon="orders-o" name="bill" to="/"> 账单</van-tabbar-item>
    <van-tabbar-item icon="bar-chart-o" name="count" to="/count"
      >统计</van-tabbar-item
    >
    <van-tabbar-item icon="contact-o" name="user" to="/user"
      >我的</van-tabbar-item
    >
  </van-tabbar>
</template>

<style lang="less" scoped>
.tab {
  border-top: 1px solid #e9e9e9;
  height: 50px;
}
</style>
