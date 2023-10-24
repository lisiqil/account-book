module.exports = (options, app) => {
  return async function refreshCsrf(ctx, next) {
    // 每次请求完刷新csrftoken
    await ctx.rotateCsrfSecret();
    await next();
  };
};
