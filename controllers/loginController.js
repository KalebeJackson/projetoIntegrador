const {Usuario} = require('../models/Usuario')

const loginController = {
    index: (req,res) =>{
        return res.render('login')
    },
    postLogin: (req, res) => {
        Usuario
        const { email, senha } = req.body

        const usuario = Usuario.find(usuario => usuario.email == email)

        if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
            return res.status(400).json({ mensagem: "Email ou senha estão incorretos ou não existem!" });
        }


        req.session.usuario = usuario

        res.redirect('/servicos')
    }
}

    module.exports = loginController

