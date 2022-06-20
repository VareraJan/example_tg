const { Router } = require('express');
const router = Router();
const admController = require('../controllers/chat.controller');

// /api/admbt/chat

// добавить чат
router.post('/', admController.createChat);
//  редактировать чат
router.put('/', admController.editChat);
// удалить чат
router.delete('/', admController.deleteChat);

// установить связать бота с чатом
router.post('/bot', admController.createBotchat);
// удалить связь
router.delete('/bot', admController.deleteBotchat);

module.exports = router;
