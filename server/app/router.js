"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get("/index", controller.home.index);
  router.get("/finduser", controller.home.finduser);
  router.get("/findAll", controller.home.findAll);
  router.get("/userselect", controller.home.userselect);

  router.get("/news", controller.news.list);
};
