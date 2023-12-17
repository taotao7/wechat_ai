module.exports = {
  apps: [
    {
      name: "wechat_ai",
      script: "index.js",
    },
  ],
  env: {
    NODE_ENV: "production",
    DASHSCOPE_API_KEY: "",
    WECHAT_NAME: "@",
  },
};
