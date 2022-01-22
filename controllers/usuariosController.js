const db = require('../models/Usuario');
const Sequelize = require('sequelize')
const {Usuario} = require('./../models')

const UsuarioController = {
    index: async (req, res) => {
        try {
        const listar =  await Usuario.findAll()
        return res.json(listar)
        } catch (error) {
            console.log(error)
        }
    }
    // create: (req,res) => {
    //     return res.render('cadastro')
    // },
    // store: async (req,res) => {
    //     const {nome, email, senha} = req.body
    //     const result = await Usuario.create({
    //         nome,
    //         email,
    //         senha,
    //     })
    //     console.log(result)
    // }
}

module.exports = UsuarioController;