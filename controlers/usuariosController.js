const db = require('../models/Usuario');
const Sequelize = require('sequelize')


const UsuarioController = {
    create: (req,res) => {
        return res.render('cadastro')
    },
    store: async (req,res) => {
        const {nome, email, senha} = req.body
        const result = await Usuario.create({
            nome,
            email,
            senha,
        })
        console.log(result)
    }
}

module.exports = UsuarioController;