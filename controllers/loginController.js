const { Usuario } = require("../models");
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
            mensagem: "Email ou senha estão incorretos ou não existem!",
          });}
      if (Number(senha) !== usuario.senha) {
        return res
          .status(400)
          .json({
            mensagem: "Email ou senha estão incorretos ou não existem!",
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
