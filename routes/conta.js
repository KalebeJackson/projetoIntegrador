const express = require('express')
const router = express.Router()
const contaController = require('../controllers/contaController')
const app = express()

app.get('/perfil',(req,res)=> {
    return res.render('perfil')
   })
   
router.get('/conta', contaController.index)

module.exports = router;