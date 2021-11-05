const express = require('express')
const router = express.Router()
const contaController = require('../controlers/contaController')

router.get('/conta', contaController.index)

module.exports = router;