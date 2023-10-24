module.exports = (options, app) => {
  return async function rateLimit(ctx, next) {
    const { limit, interval } = options; // 配置项中的限制值和时间间隔
    const { ip } = ctx.request; // 用户 IP 地址

    // 生成唯一的限制标识符，可以根据需要修改
    const identifier = `rateLimit:${ip}`;
    // 获取当前标识符的访问次数
    const count = (await app.redis.get(identifier)) || 0;
    // 如果访问次数超过限制值，则返回错误响应
    if (count >= limit) {
      ctx.status = 429;
      ctx.body = "Too Many Requests";
      return;
    }
    // 增加访问次数，并设置过期时间
    await app.redis.incr(identifier);
    await app.redis.expire(identifier, interval);

    await next();
  };
};
