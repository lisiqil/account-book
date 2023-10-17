<script lang="js">
import { ref } from 'vue';
import { register } from '@/api/user'
import router from "@/router";
import { showFailToast, showSuccessToast } from "vant";

export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const inviteCode = ref('');

    const onSubmit = async (values) => {
      let token = '';
      const res = await register(values)
      const { code, data, message } = res
      if(code == 200) {
        showSuccessToast(message)
        router.push({ path: "/login" });
      } else {
        showFailToast(message)
      }
    };

    return {
      username,
      password,
      inviteCode,
      onSubmit,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <van-form @submit="onSubmit" class="form-loginview">
      <h1>您好，请注册</h1>

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

        <van-field
          v-model="inviteCode"
          type="inviteCode"
          name="inviteCode"
          label="注册码"
          placeholder="注册码"
          :rules="[{ required: true, message: '请填写注册码' }]"
        />
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>

      <div style="margin: 16px">
        <van-button round block type="success" to="/login"> 去登录 </van-button>
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
  padding-top: 180px;
  opacity: 0.8;
}
</style>
