module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 39,
      // 结果为：设计稿元素尺寸/100，比如元素宽1920px,最终页面会换算成 19.2rem ---- 这个理论是copy的
      /**
       * 上面这个注释是 copy 的，我实际操作发现，
       *
       *   <img class="imagelogo" alt="Vue logo" src="./assets/logo.png" />
       *
       *    .imagelogo {
       *      height: 220px;
       *      width: 220px;
       *    }
       *
       * 在浏览器调试，选择 iPhone12  屏幕尺寸 390 × 844
       * rootValue: 39 时，img 展示的实际宽高为 220px
       * */
      propList: ["*"],
      selectorBlackList: [".norem"], // 过滤掉.threems-开头的class，不进行rem转换
    },
  },
};
