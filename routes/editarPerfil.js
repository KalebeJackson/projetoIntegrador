const express = require('express')
const router = express.Router()
const editarPerfilController = require('../controllers/editarPerfilController')

router.get('/editarPerfil', editarPerfilController.index)

module.exports = router;