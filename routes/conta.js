const express = require('express')
const router = express.Router()
const contaController = require('../controllers/contaController')
const app = express()

router.get('/conta', contaController.index)

module.exports = router;