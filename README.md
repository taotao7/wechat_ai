# wechat ai robot

This is a sample AI bot integrated with Ali Tongyi for WeChat. To use this bot,
you need to have a Node environment greater than version 16.

Here are the steps to use the bot:

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

If you want to deploy it on a server, you can use pm2 for deployment.

```shell
npm i pm2 -g

pm2 start index.js

pm2 logs
```

show qrcode to scan
