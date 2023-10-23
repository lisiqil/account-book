<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import Header from "@/components/Header.vue";
import { showSuccessToast } from "vant";

// 对接接口
import { editUserInfo } from "@/api/user";

const router = useRouter();
const avatarList = [
  {
    name: "avatar01",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar01.jpg",
  },
  {
    name: "avatar02",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar02.jpg",
  },
  {
    name: "avatar03",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar03.jpg",
  },
  {
    name: "avatar04",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar04.jpg",
  },
  {
    name: "avatar05",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar05.jpg",
  },
  {
    name: "avatar06",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar06.jpg",
  },
  {
    name: "avatar07",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar07.jpg",
  },
  {
    name: "avatar08",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar08.jpg",
  },
  {
    name: "avatar09",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar09.jpg",
  },
  {
    name: "avatar10",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar10.jpg",
  },
  {
    name: "avatar11",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar11.jpg",
  },
  {
    name: "avatar12",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar12.jpg",
  },
  {
    name: "avatar13",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar13.jpg",
  },
  {
    name: "avatar14",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar14.jpg",
  },
  {
    name: "avatar15",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar15.jpg",
  },
  {
    name: "avatar16",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar16.jpg",
  },
  {
    name: "avatar17",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar17.jpg",
  },
  {
    name: "avatar18",
    url: "https://nisqy-1256845982.cos.ap-nanjing.myqcloud.com/avatar/avatar18.jpg",
  },
];

const showDialog = ref(false); // 显示确认框
const selectedAvatar = ref(""); // 选中的头像

const clickImg = (url) => {
  selectedAvatar.value = url;
  showDialog.value = true;
};

// 更换头像
const reqEditUserInfo = async () => {
  try {
    const { code } = await editUserInfo({ avatar: selectedAvatar.value });
    if (code === 200) {
      showSuccessToast("头像更换成功");
      setTimeout(() => {
        router.push("/user");
      }, 1000);
    }
  } catch (error) {
    console.log("error: ", error);
  } finally {
    showDialog.value = false;
  }
};
</script>

<template>
  <Header title="更换头像" />
  <div class="main">
    <div class="items">
      <div v-for="value in avatarList" :key="value.name">
        <van-image
          style="border: 2px solid #fff"
          round
          fit="contain"
          width="80"
          height="80"
          :src="value.url"
          alt="dog"
          lazy-load
          @click="clickImg(value.url)"
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
        </van-image>
      </div>
    </div>
    <van-dialog
      v-model:show="showDialog"
      title="确认更换该头像？"
      show-cancel-button
      round-button
      @confirm="reqEditUserInfo"
    >
      <div class="dig-content">
        <van-image
          style="border: 2px solid #fff"
          round
          fit="contain"
          width="80"
          height="80"
          :src="selectedAvatar"
          alt="dog"
          lazy-load
        />
      </div>
    </van-dialog>
  </div>
</template>

<style lang="less" scoped>
.main {
  height: calc(100vh - 46px);
  background: url("@/assets/user.jpeg") no-repeat center center fixed;
  background-size: 100% 100%;
  .items {
    height: 80%;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center center;
    gap: 20px 10px;
  }
}
.dig-content {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
