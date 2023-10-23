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

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1697006684918_8846";

  // add your middleware config here
  config.middleware = ["robot"];

  config.robot = {
    ua: [/Baiduspider/i],
  };

  // 单个数据库信息配置
  config.mysql = {
    client: {
      host: "47.118.54.138",
      port: "3306",
      user: "root",
      password: "Lsq!1995",
      database: "pocket_book",
    },
    // client: {
    //   host: "gz-cynosdbmysql-grp-ionpot75.sql.tencentcdb.com",
    //   port: "24360",
    //   user: "root",
    //   password: "lisiqi!1995%^ZKZ9594",
    //   database: "account_book",
    // },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  // token配置
  config.jwt = {
    secret: "nisqyPocketBook20231012",
  };

  // 设置跨域白名单，允许全部
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ["*"],
  };

  // add your user config here
  const userConfig = {
    myAppName: "egg server",
    inviteCode: "woshiruciyingjun",
  };

  return {
    ...config,
    ...userConfig,
  };
};
