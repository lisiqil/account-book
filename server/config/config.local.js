/* eslint valid-jsdoc: "off" */
"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // 单个数据库信息配置
  config.mysql = {
    client: {
      host: "47.118.54.138",
      port: "3306",
      user: "root",
      password: "Lsq!1995",
      database: "pocket_book",
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.security = {
    csrf: {
      // enable 开发 false, 不校验csrf， 生产 true
      enable: false,
    },
  };

  // add your user config here
  const userConfig = {
    currConfig: "local config",
  };

  return {
    ...config,
    ...userConfig,
  };
};
