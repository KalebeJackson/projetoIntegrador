const express = require('express')
const router = express.Router()
const loginController = require('../controlers/loginController')

router.get('/login', loginController.index)

module.exports = router;