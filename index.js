const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const loginRouter = require('./routes/login')
const perfilRouter = require('./routes/perfil')
const usuarios = require("./routes/usuario")
const multer = require('multer')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(loginRouter)
app.use(perfilRouter)


app.get('/',(req,res)=> {
return res.render('home')
})

app.get('/cadastro',(req,res)=> {
    return res.render('cadastro')
    })

app.get('/home',(req,res)=> {
    return res.render('home')
    })

app.get('/configuracao',(req,res)=> {
    return res.render('configuracao')
    })

app.get('/editarPerfil',(req,res)=> {
    return res.render('editarPerfil')
    })

app.get('/comunidade',(req,res)=> {
    return res.render('comunidade')
    })


app.listen(8000, () => {
    console.log('Servidor rodando')
})