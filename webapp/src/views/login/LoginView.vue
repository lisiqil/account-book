<script lang="js">
import { ref } from 'vue';
import { login } from '@/api/user'
import router from "@/router";

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const onSubmit = async (values) => {
      let token = ''
      const res = await login(values)
      const { code, data } = res
      if(code == 200) {
        token = data.token
        localStorage.setItem("token", token)
        router.push({ path: "/" });
      }
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <van-form @submit="onSubmit" class="form-loginview">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang="less" scoped>
.wrapper {
  height: 100vh;
  background-image: url("@/assets/login_background.jpeg");
  background-size: 100% 100%;
}

.form-loginview {
  padding-top: 220px;
  opacity: 0.8;
}
</style>
