const { Midia } = require("./../models");

const contaController = {
    index: async(req, res) => {
        try {
            const listar = await Midia.findAll();
            // return res.render('../views/perfil')
            return res.json(listar);
        } catch (error) {
            console.log(error);
        }
    },
};

module.exports = contaController;