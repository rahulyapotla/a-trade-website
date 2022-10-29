const express = require('express');
const controller = require('../../controllers/trade_controller/tradeController')
const router = express.Router();

router.get('/', controller.index)

router.get('/new', controller.new)

router.get('/available_breeds', controller.breeds)

router.post('/available_breeds', controller.create)

router.get('/available_breeds/:id', controller.show)


router.get('/available_breeds/:id/edit', controller.edit)

router.put('/available_breeds/:id', controller.update)

router.delete('/available_breeds/:id', controller.delete)

module.exports = router;