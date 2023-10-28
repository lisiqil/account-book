const BaseController = require("./BaseController");

class ForwardController extends BaseController {
  // *************** redis 操作 ***************
  // 增、 改
  async redisSetV() {
    const { app, ctx } = this;
    const { key, value } = ctx.request.body;
    const res = await app.redis.set(key, value, "EX", 60 * 60 * 24);
    ctx.body = res;
  }
  // 查
  async redisGetV() {
    const { app, ctx } = this;
    const { key } = ctx.request.body;
    const res = await app.redis.get(key);

    const mysqlClient = app.config.mysql.client;
    const redisClient = app.config.redis.client;

    console.log("current time ======================= ", new Date());
    console.log("db-mysql ======================= ", mysqlClient);
    console.log("db-redis ======================= ", redisClient);
    /**
     * npm run dev 命令启动， app.config.currConfig: "local config"
     * npm run start 命令启动， app.config.currConfig: "prod config"
     * */
    ctx.body = {
      redisres: res,
      currConfig: app.config.currConfig,
    };
  }
  // 删
  async redisDeleteV() {
    const { app, ctx } = this;
    const { key } = ctx.request.body;
    const res = await app.redis.del(key);
    ctx.body = res;
  }
}

module.exports = ForwardController;
