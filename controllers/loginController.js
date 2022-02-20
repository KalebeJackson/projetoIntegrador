const {Usuario} = require('../models/Usuario')
// const botao = document.querySelector('.entrar')

// botao.onclick = function(){
//     alert('oi')
// }
const loginController = {
    index: async (req,res) =>{
        return res.render('login')
    },
    postLogin: (req, res) => {
   
        const { email, senha } = req.body
        console.log(email,senha)
        console.log(Usuario)
        const usuario = Usuario.findUnique(email)
        // const login = Usuario.find(senha)
        if(senha !== usuario.senha){
            return res.status(400).json({ mensagem: "Email ou senha estão incorretos ou não existem!" });
        }

        if (!usuario) {
            return res.status(400).json({ mensagem: "Email ou senha estão incorretos ou não existem!" });
        }else{
            res.redirect('/conta')
        }
    }
}
    module.exports = loginController

