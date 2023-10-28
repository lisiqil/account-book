/* eslint valid-jsdoc: "off" */
"use strict";

const {
  prod: { dbMysql, dbRedis },
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

  // 生产环境防爬虫
  config.robot = {
    ua: [/bot|spider|crawl|slurp|sohu-search|lycos|robozilla/i],
  };

  // 单个数据库信息配置
  config.mysql = {
    client: dbMysql,
    app: true, // 是否加载到 app
    agent: false, // 是否加载到 agent
  };

  config.redis = {
    client: dbRedis,
  };

  // 生产环境开启 csrf-token 校验，开发环境不开启
  config.security = {
    csrf: {
      enable: true,
    },
  };

  // add your user config here
  const userConfig = {
    currConfig: "prod config",
  };

  return {
    ...config,
    ...userConfig,
  };
};
