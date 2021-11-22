const express = require('express')
const app = express()
const loginRouter = require('./routes/login')
const perfilRouter = require('./routes/perfil')


app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('../controllers/login')
app.use(perfilRouter)


app.get('/',(req,res)=> {
return res.render('home')
})
app.get('/login',(req,res)=> {
    return res.render('login.html')
    })

app.get('/perfil',(req,res)=> {
     return res.render('perfil')
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