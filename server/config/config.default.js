/* eslint valid-jsdoc: "off" */
"use strict";
const { secret, inviteCode } = require("../config.json");
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1697006684918_8846";

  // add your middleware config here
  config.middleware = ["csrfDefense", "robot", "rateLimit"];

  config.robot = {
    ua: [/Baiduspider/i],
  };

  // 访问限频
  config.rateLimit = {
    limit: 15, // 限制每个 IP 在指定时间间隔内的访问次数
    interval: 30, // 时间间隔（单位：秒）
  };

  // token配置
  config.jwt = {
    secret: secret,
  };

  // 设置跨域白名单，允许全部
  config.security = {
    csrf: {
      enable: false,
      ignore: (ctx) => {
        // 不需要进行 CSRF 校验的路由
        const ignorePaths = ["/user/login"];
        if (ignorePaths.includes(ctx.path)) {
          return true;
        }
        return false;
      },
    },
    domainWhiteList: ["*"],
  };

  // 错误拦截
  config.onerror = {
    all(err, ctx) {
      console.error("server error", err);
      // const { app } = ctx;
      try {
        // 业务错误
        const { code, data } = JSON.parse(err.message);
        ctx.error(code, data);
      } catch (err) {
        // 服务错误
        console.error(err);
        ctx.body = "服务繁忙，请稍后再试";
        ctx.status = 500;
      }
    },
  };

  // add your user config here
  const userConfig = {
    myAppName: "egg server",
    inviteCode: inviteCode,
  };

  return {
    ...config,
    ...userConfig,
  };
};
