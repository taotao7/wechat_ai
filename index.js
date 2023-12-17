import { log } from "wechaty";
import bot, { onLogin, onLogout, onMessage, onScan } from "./src/wechat.js";

// tongyi api key
process.env.DASHSCOPE_API_KEY === "sk-";

process.env.WECHAT_NAME = "@";

bot.on("scan", onScan);
bot.on("login", onLogin);
bot.on("logout", onLogout);
bot.on("message", onMessage);

bot
  .start()
  .then(() => log.info("StarterBot", "Starter Bot Started."))
  .catch((e) => log.error("StarterBot", e));
