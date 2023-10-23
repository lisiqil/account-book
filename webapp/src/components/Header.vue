<script setup>
const { title } = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const onClickLeft = () => history.back();
</script>

<template>
  <van-nav-bar
    class="title-nav"
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<style lang="less" scoped>
.title {
  height: 46px;
}
</style>
