const { Chat, BotChat } = require('../db/models');

const createChat = async (req, res) => {
  // создать чат
  try {
    const { name, chatId } = req.body;
    if (name && chatId) {
      const response = await Chat.findOrCreate({
        where: { chatId },
        defaults: req.body,
        raw: true,
      });
      if (response[1]) {
        return res.json({ message: 'ok' });
      }

      return res.json({ error: 'Chat with this token already exists' });
    }
    return res.json({ error: 'not enough data' });
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const editChat = (req, res) => {
  //  редактировать чат

  try {
    res.json({});
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const deleteChat = (req, res) => {
  //  удалить чат

  try {
    res.json({});
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const createBotchat = async (req, res) => {
  // связать бота с чатом
  try {    
    let { bot_id, chat_id } = req.body;
    if (bot_id && chat_id) {
      const response = await BotChat.findOrCreate({
        where: { bot_id, chat_id },
        defaults: { bot_id, chat_id },
        raw: true,
      });
      if (response[1]) {
        return res.json({ message: 'ok' });
      }

      return res.json({ error: 'This entry already exists' });
    }

    res.json({ error: 'not enough data' });
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const deleteBotchat = (req, res) => {
  // удалить связь

  try {
    res.json({});
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

module.exports = {
  createChat,
  editChat,
  deleteChat,
  createBotchat,
  deleteBotchat,
};
