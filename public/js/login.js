
const botao = document.querySelector(".entrar");
const email = document.querySelector(".email");
const senha = document.querySelector(".senha");

botao.onclick = function (event) {
  event.preventDefault();
  const user = {
    email: email.value,
    senha: senha.value,
  };

  const headers = {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify(user),
      mode: 'no-cors'
  } 

  fetch('http://localhost:8000/login', headers)
  .then((resposta) => resposta.json())
  .then((conteudo) => console.log(conteudo))

  console.log(user);
};

// const validacao = botao.addEventListener('click', function(event){})
