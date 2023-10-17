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
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>

<style lang="less" scoped></style>
