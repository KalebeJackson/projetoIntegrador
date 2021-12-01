const express = require('express')
const app = express()
const router = express.Router()
const loginController = require('../controllers/loginController')

router.get('/login', loginController.index)
app.get('/login',(req,res)=> {
    return res.render('login')
    })
    
module.exports = router;