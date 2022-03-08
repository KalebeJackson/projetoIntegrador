
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

  axios.post("http://localhost:8000/login", user)
    .then((resposta) => {
      const user = resposta.data
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
    .catch((erro) => {
      Swal.fire({
        icon: 'error',
        title: 'Opa, algo deu errado :(',
        text: erro.response.data.mensagem,
      })
    });
};


