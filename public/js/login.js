const botao = document.querySelector(".entrar");
const email = document.querySelector(".email");
const senha = document.querySelector(".senha");

botao.onclick = function (event) {
  event.preventDefault();
  const user = {
    email: email.value,
    senha: senha.value
  };
console.log(user)
  const headers = {
    method: "POST",
    //   headers: new Headers(),
    body: JSON.stringify(user),

    //   mode: 'no-cors'
    headers: { "Content-Type": "application/json", 'Accept': "application/json" }
  };

  fetch("http://localhost:8000/login", headers)
    .then((resposta) => resposta.json())
    .then((user) => {
        if(user && user.mensagem){
           return
        }
        const usuario = {
        nome: user.nick,
        id: user.id
      };
      localStorage.setItem("usuario", JSON.stringify(usuario));
      window.location.href = "http://localhost:8000/conta";
    })
    .catch((erro) => console.log(erro));
};


