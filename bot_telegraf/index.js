const { Telegraf } = require('telegraf');
require('dotenv').config();

const { start1 } = require('./Headings/start');
const { endContacts } = require('./Headings/finish');
const startKeyboard = require('./Keyboards/startContact');

const BOT_TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(BOT_TOKEN);

bot.start(async (ctx) => {
  await ctx.reply(
    start1,
    startKeyboard
  );
});
bot.action('addContact', async (ctx) => {
  // избавиться от часиков
  await ctx.answerCbQuery();
  const chat_id = ctx.update.callback_query.from.id;
  const first_name = ctx.update.callback_query.from.first_name;
  const last_name = ctx.update.callback_query.from.last_name;
  const username = ctx.update.callback_query.from.username;
  // TODO отправить данные на сервер тут

  ctx.reply(endContacts);
});
bot.on('text', async (ctx) => {
  if (ctx.update.message.text.startsWith('contact')) {
    const chat_id_id = ctx.update.message.from.id;
    const first_name = ctx.update.message.from.first_name;
    const last_name = ctx.update.message.from.last_name;
    const username = ctx.update.message.from.username;
    const text = ctx.update.message.text;
    // TODO отправить данные на сервер тут

    ctx.reply(endContacts);
  }
});

bot.launch();
