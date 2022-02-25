const usuario = JSON.parse(localStorage.getItem('usuario'))
const headerUsuario = document.querySelector('.perfil')

headerUsuario.innerHTML += usuario.nome