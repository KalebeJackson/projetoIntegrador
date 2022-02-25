const { Usuario } = require("../models");
const bcrypt = require('bcrypt');
// const botao = document.querySelector('.entrar')

// botao.onclick = function(){
//     alert('oi')
// }
const loginController = {
  index: async (req, res) => {
    return res.render("login");
  },
  postLogin: async (req, res) => {
    try {
      const { email, senha } = req.body;
      const usuario = await Usuario.findOne({
        where: { email: email }
      });
      console.log(senha)
      if (!usuario) {
        return res
          .status(400)
          .json({
            mensagem: "Usuário não existe!",
          });}
      if (!bcrypt.compareSync(senha, usuario.senha)) {
        return res
          .status(400)
          .json({
            mensagem: "Senha incorreta!",
          });


      } else {
        return res.json(usuario);
      }
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = loginController;
