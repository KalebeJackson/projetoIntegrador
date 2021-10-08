const express = require('express')
const router = express.Router()
const perfilController = require('.././controlers/perfilController')

router.get('/perfil', perfilController.index)

module.exports = router;

