"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  mysql: {
    enable: true,
    package: "egg-mysql",
  },
  jwt: {
    enable: true,
    package: "egg-jwt",
  },
  security: {
    enable: true,
    package: "egg-security",
  },
  onerror: {
    enable: true,
    package: "egg-onerror",
  },
  redis: {
    enable: true,
    package: "egg-redis",
  },
};
