//importando o express
const express = require("express");

const app = express();
const path = require("path");


//importando as rotas da aplicação
const loginRouter = require("./routes/login");
const perfilRouter = require("./routes/editarPerfil");
const usuarios = require("./routes/usuario");
const contaRouter = require("./routes/conta");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//configurando o EJS na aplicação
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

//retornado as rotas
app.use(loginRouter);
app.use(perfilRouter);
app.use(contaRouter);
app.use(usuarios);



//criando as rotas http
app.get("/", (req, res) => {
  return res.render("home");
});

app.get("/cadastro", (req, res) => {
  return res.render("cadastro");
});

// app.get("/home", (req, res) => {
//   return res.render("home");
// });

app.get("/editarPerfil", (req, res) => {
  return res.render("editarPerfil");
});

app.get("/editarPerfil", (req, res) => {
  return res.render("editarPerfil");
});

app.get("/comunidade", (req, res) => {
  return res.render("comunidade");
});

app.get("/conteudo", (req, res) => {
  return res.render("conteudo");
});

app.get("/conteudoHP", (req, res) => {
  return res.render("conteudoHP");
});

app.get("/conteudoOSPC", (req, res) => {
  return res.render("conteudoOSPC");
});


//indicando a porta do nosso servidor web
app.listen(8000, () => {
  console.log("Servidor rodando");
});
