const { Usuario } = require("../models/Usuario");
const user = document.querySelector(".email");
const password = document.querySelector(".senha");
const entrar = document.querySelector(".entrar");

entrar.addEventListener("click", function () {
  for(let i = 0; i < Usuario.length; i++){
    const verificarEmail = user[i].value
    const verificarSenha = password[i].value

    if(verificarEmail.findAll(Usuario)){
      alert('email correto')
    }else{
      alert('erro')
    }
  }
  // alert('elemento capturado')
});
