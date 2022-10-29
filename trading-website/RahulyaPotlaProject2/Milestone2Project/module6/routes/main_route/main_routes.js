const express = require('express');
const controller = require('../../controllers/main_controller/mainController')
const router = express.Router();

router.get('/about', controller.about)

router.get('/contact', controller.contact)



module.exports = router