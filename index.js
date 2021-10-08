const express = require('express')
const app = express()
const loginRouter = require('./routes/login')
const perfilRouter = require('./routes/perfil')


app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(loginRouter)
app.use(perfilRouter)


app.get('/',(req,res)=> {
return res.render('index')
})

app.get('/login',(req,res)=> {
    return res.render('login')
    })

app.get('/perfil',(req,res)=> {
     return res.render('perfil')
    })

app.listen(3001, () => {
    console.log('Servidor rodando')
})