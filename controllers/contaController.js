const {Midia} = require('./../models')

const midiaController = {
    index: async (req, res) => {
        try {
        const listar =  await Midia.findAll()
        return res.json(listar)
        } catch (error) {
            console.log(error)
        }
    }}

    module.exports =  midiaController