const { Router } = require('express');
const router = Router();
const admController = require('../controllers/administrator.controller');

// /api/admbt
//  отдает всех ботов и их группы
router.get('/', admController.getAllBots);

// создать бота
router.post('/', admController.createAdmBot);
// удалить бота
router.delete('/', admController.deleteAdmBot);



// записать опции пользователя для бота
router.post('/options', admController.createOptions);
// отредактировать опции пользователя для бота
router.put('/options', admController.editOptions);
// удалить опции пользователя для бота
router.delete('/options', admController.deleteOptions);

// запустить бота с конкретными настройками (Bot_options Table)
router.get('/activation/:options_id', admController.activateBot);
// остановить бота с конкретными настройками (Bot_options Table)
router.get('/deactivation/:options_id', admController.deactivateBot);

module.exports = router;
