const { resolve } = require("path");
const currentEnv = process.env.NODE_ENV;

console.log("currentEnv =================== ", currentEnv);

module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api-ab": {
        target:
          currentEnv === "development"
            ? "http://localhost:7001/"
            : "https://api",
        changeOrigin: true,
        pathRewrite: {
          "^/api-ab": "",
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  },

  lintOnSave: false,
};
