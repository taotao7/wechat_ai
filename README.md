# wechat ai robot

This is a sample AI bot integrated with Ali Tongyi for WeChat. To use this bot,
you need to have a Node environment greater than version 16.

Here are the steps to use the bot:

## how to use

Step 1: Generate a Tongyi API key by following the instructions provided in the
link:
[genrate tongyi api key](https://help.aliyun.com/zh/dashscope/developer-reference/activate-dashscope-and-create-an-api-key?spm=a2c4g.11186623.0.i1)

Step 2: Open the `index.js` file and update the environment variables:

```js
DASHSCOPE_API_KEY = ""; // your Tongyi API key
WECHAT_NAME = "@taotao7"; // your WeChat name (not ID account), "taotao7" is my WeChat name
```

Step 3: Run the following commands in your terminal:

```bash
npm install
npm run start
```

After following these steps, you will be able to use the WeChat AI bot with Ali
Tongyi.

## deploy

If you want to deploy it on a server, you can use pm2 for deployment.

Step 1:

install dependency with server

```shell
yum install gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget atk at-spi2-atk libXcomposite gtk3

apt install gconf-service libgbm-dev libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
```

Step 2:

open ecosystem.config.js

```js
env: {
  NODE_ENV: "production",
  DASHSCOPE_API_KEY: "", // your Tongyi API key
  WECHAT_NAME: "@", // your WeChat name (not ID account), "taotao7" is my WeChat name
},
```

Step 3:

start

```shell
npm i pm2 -g

pm2 start ecosystem.config.cjs

pm2 log  # wait qrcode
```

show qrcode to scan

## other

change model

@bot change model: "qwen-turbo", "qwen-plus", "qwen-max", "qwen-max-1201",
"qwen-max-longcontext"

```shell
@taotao7 change model: qwen-max-longcontext
```
