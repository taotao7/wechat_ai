import { log, ScanStatus, WechatyBuilder } from "wechaty";
import qrcodeTerminal from "qrcode-terminal";
import client from "./chat.js";
import dayjs from "dayjs";

export function onScan(qrcode, status) {
  if (status === ScanStatus.Waiting || status === ScanStatus.Timeout) {
    const qrcodeImageUrl = [
      "https://wechaty.js.org/qrcode/",
      encodeURIComponent(qrcode),
    ].join("");
    log.info(
      "StarterBot",
      "onScan: %s(%s) - %s",
      ScanStatus[status],
      status,
      qrcodeImageUrl,
    );

    qrcodeTerminal.generate(qrcode, { small: true }); // show qrcode on console
  } else {
    log.info("StarterBot", "onScan: %s(%s)", ScanStatus[status], status);
  }
}

export function onLogin(user) {
  log.info("StarterBot", "%s login", user);
}

export function onLogout(user) {
  log.info("StarterBot", "%s logout", user);
}

export async function onMessage(msg) {
  log.info("StarterBot", msg.toString());

  const text = msg.text();
  const room = msg.room();
  const date = msg.date();

  if (room) {
    // if self send message, ignore
    if (msg.self()) return;

    if (
      text.includes(process.env.WECHAT_NAME) &&
      dayjs(date).valueOf() - dayjs().valueOf() < 1000 * 60 * 5
    ) {
      // get content
      const pattern = new RegExp(`@${process.env.WECHAT_NAME}(.+)`);

      const question = pattern.exec(text)[1].trim();

      if (question) {
        if (question.includes("change model:")) {
          client.changeModel(question.split(":")[1]);
        }

        try {
          const res = await client.sendPrompt(question);
          await msg.say(res.data?.output?.text);
        } catch (e) {
          console.log(e);
          await msg.say("ai 服务出错");
        }
      }
    }
  }
}

const bot = WechatyBuilder.build({
  name: "ding-dong-bot",
  puppet: "wechaty-puppet-wechat",
  puppetOptions: {
    uos: true,
    persistence: true,
  },
  /**
   * You can specific `puppet` and `puppetOptions` here with hard coding:
   *
  puppet: 'wechaty-puppet-wechat',
  puppetOptions: {
    uos: true,
  },
   */
  /**
   * How to set Wechaty Puppet Provider:
   *
   *  1. Specify a `puppet` option when instantiating Wechaty. (like `{ puppet: 'wechaty-puppet-whatsapp' }`, see below)
   *  1. Set the `WECHATY_PUPPET` environment variable to the puppet NPM module name. (like `wechaty-puppet-whatsapp`)
   *
   * You can use the following providers locally:
   *  - wechaty-puppet-wechat (web protocol, no token required)
   *  - wechaty-puppet-whatsapp (web protocol, no token required)
   *  - wechaty-puppet-padlocal (pad protocol, token required)
   *  - etc. see: <https://wechaty.js.org/docs/puppet-providers/>
   */
  // puppet: 'wechaty-puppet-whatsapp'

  /**
   * You can use wechaty puppet provider 'wechaty-puppet-service'
   *   which can connect to remote Wechaty Puppet Services
   *   for using more powerful protocol.
   * Learn more about services (and TOKEN) from https://wechaty.js.org/docs/puppet-services/
   */
  // puppet: 'wechaty-puppet-service'
  // puppetOptions: {
  //   token: 'xxx',
  // }
});

export default bot;
