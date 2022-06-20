const { Bot, Bot_option } = require('../db/models');

const getAllBots = (req, res) => {
  // TODO
  //  отдает всех ботов и их группы
  try {
    res.json({  });
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const createAdmBot = async (req, res) => {
  // создать бота
  try {
    const { name, username, token } = req.body;
    if (name && username && token) {
      const response = await Bot.findOrCreate({
        where: { token },
        defaults: req.body,
        raw: true,
      });
      console.log('createAdmBot == ', response[1]);
      if (response[1]) {

        return res.json({ message: 'ok' });
      }

      return res.json({ error: 'Bot with this token already exists' });
    }

    return res.json({ error: 'not enough data' });
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const deleteAdmBot = (req, res) => {
  // TODO
  // удалить бота
  try {
    res.json({  });
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const createOptions = async (req, res) => {
  // записать опции пользователя для бота
  // image = url
  // timeout = ms
  try {
    const { bot_id, content, image, timeout, chat_id} = req.body;
    if(bot_id && chat_id && timeout && (content || image)) {
      const response = await Bot_option.findOrCreate({
        where: req.body,
        defaults: req.body,
        raw:true
      })
      if (response[1]) {
        return res.json({ message: 'ok' });
      }

      return res.json({ error: 'Bot with these settings already exists' });
    }

    return res.json({ error: 'not enough data' });
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const editOptions = (req, res) => {
  // TODO
  // отредактировать опции пользователя для бота
  try {
    res.json({  });
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const deleteOptions = (req, res) => {
  // TODO
  // удалить опции пользователя для бота
  try {
    res.json({  });
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const activateBot = (req, res) => {
  // TODO
  // запустить бота с конкретными настройками (Bot_options Table)
  try {
    res.json({  });
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

const deactivateBot = (req, res) => {
  // TODO
  // остановить бота с конкретными настройками (Bot_options Table)
  try {
    res.json({  });
  } catch (error) {
    console.log('error =====', error);

    return res.json({ error });
  }
};

module.exports = {
  getAllBots,
  createAdmBot,
  deleteAdmBot,
  createOptions,
  editOptions,
  deleteOptions,
  activateBot,
  deactivateBot,
};
