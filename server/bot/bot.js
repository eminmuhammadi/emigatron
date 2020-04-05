/***
  For Documentation
  https://github.com/yagop/node-telegram-bot-api/blob/master/doc/api.md
*/
/* eslint-disable no-console */
const path        = require('path');
const TelegramBot = require('node-telegram-bot-api');
const { TELEGRAM_TOKEN, OPTIONS } = require(path.join(__dirname, '/../config.js'));
const bot = new TelegramBot(TELEGRAM_TOKEN, OPTIONS);

bot.on("polling_error", console.log);
bot.on("webhook_error", console.log);

module.exports = {
    BOT: bot
};
