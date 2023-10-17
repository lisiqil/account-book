<script setup>
import { showSuccessToast } from "vant";
import { ref, reactive, watchEffect, onMounted } from "vue";
import { useRouter } from "vue-router";

// 对接接口
import { getUserInfo, editUserInfo } from "@/api/user";

const router = useRouter();
const canEditSignature = ref(false);
const userinfo = reactive({
  username: "",
  signature: "",
  newSignature: "",
  avatar: "",
});
const showAction = ref(false);

const onSelectAction = (item) => {
  router.push("/upload-avatar");
};

// 获取用户信息
onMounted(async () => {
  initUserData();
});

const initUserData = async () => {
  const { data } = await getUserInfo();
  userinfo.username = data.username;
  userinfo.signature = data.signature;
  userinfo.avatar = data.avatar;
};

// 点击头像，更换头像
const clickAvatar = () => {
  showAction.value = true;
};

// 修改个性签名
const editSignature = async (action) => {
  console.log("action: ", action);
  if (action === "cancel") {
    canEditSignature.value = false;
    return false;
  }

  try {
    const { code, data } = await editUserInfo({
      signature: userinfo.newSignature,
    });
    if (code === 200) {
      showSuccessToast("修改成功");
      userinfo.signature = data.signature;
    }
  } catch (error) {
    console.log("error: ", error);
  } finally {
    canEditSignature.value = false;
    return true;
  }
};

// 修改密码
const clickEditPassword = () => {
  router.push({
    path: "/update-password",
  });
};

// 退出登录
const loginOut = () => {
  localStorage.removeItem("token");
  showSuccessToast({ message: "退出成功", duration: 1000 });
  setTimeout(() => {
    router.push("/login");
  }, 1000);
};
</script>

<template>
  <div class="wrapper">
    <div class="header">
      <div class="header-avatar">
        <van-image
          round
          fit="contain"
          width="80"
          height="80"
          :src="userinfo.avatar"
          alt="头像"
          @click="clickAvatar"
        />
      </div>

      <div class="header-name">
        <span> {{ userinfo.username }} </span>
      </div>
      <div class="header-signature">
        <span>{{ userinfo.signature }}</span>
      </div>
    </div>

    <div class="content">
      <van-cell-group inset>
        <van-cell
          title="更换头像"
          icon="user-circle-o"
          is-link
          @click="onSelectAction"
        />

        <van-cell
          title="修改密码"
          icon="edit"
          is-link
          @click="clickEditPassword"
        />

        <van-cell
          title="个性签名"
          icon="like-o"
          is-link
          @click="canEditSignature = true"
        />
      </van-cell-group>
    </div>
    <div class="footer">
      <van-button size="large" type="warning" @click="loginOut"
        >退出登录</van-button
      >
    </div>
  </div>

  <van-dialog
    v-model:show="canEditSignature"
    title="修改个签"
    show-cancel-button
    @confirm="canEditSignature = false"
    :beforeClose="editSignature"
  >
    <van-field
      v-model="userinfo.newSignature"
      placeholder="请输入个性签名"
      clearable
    />
  </van-dialog>
</template>

<style lang="less" scoped>
.wrapper {
  display: grid;
  height: 95vh;
  grid-template-rows: 1.5fr 3fr 1fr;
  align-items: stretch;
  padding: 3%;
  font-size: 18px;
  background: url("@/assets/user.jpeg") repeat;
  .header {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-template-rows: 0.3fr 0.8fr 0.5fr 0.8fr;
    align-items: center;
    justify-items: center;
    .header-avatar {
      grid-column-start: 2;
      grid-row-start: 2;
      div {
        border: 2px solid #fff;
      }
    }
    .header-name {
      grid-column-start: 2;
      grid-row-start: 3;
      font-weight: 700;
      font-size: 22px;
      color: #fff;
    }
    .header-signature {
      grid-column-start: 1;
      grid-column-end: 4;
      grid-row-start: 4;
      font-size: 18px;
      color: #fff;
    }
  }
  .content {
    grid-row-start: 2;
    font-size: 17px;
  }
  .footer {
    margin: 10px;
  }
}
</style>
