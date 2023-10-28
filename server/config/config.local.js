/* eslint valid-jsdoc: "off" */
"use strict";
const {
  dev: { dbMysql, dbRedis },
} = require("../config.json");

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
    client: dbMysql,
    app: true, // 是否加载到 app
    agent: false, // 是否加载到 agent
  };

  config.redis = {
    client: dbRedis,
  };

  // 开发环境不开启 csrf-token 校验
  config.security = {
    csrf: {
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
