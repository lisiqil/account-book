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

  config.robot = {
    ua: [/bot|spider|crawl|slurp|sohu-search|lycos|robozilla|Postman/i],
  };

  // 单个数据库信息配置
  config.mysql = {
    client: {
      host: "gz-cynosdbmysql-grp-ionpot75.sql.tencentcdb.com",
      port: "24360",
      user: "root",
      password: "lisiqi!1995%^ZKZ9594",
      database: "account_book",
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

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
