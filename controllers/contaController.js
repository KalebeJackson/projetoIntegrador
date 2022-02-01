const { Midia } = require('../models');

const contaController = {
<<<<<<< HEAD
  index: async (req, res) => {
    console.log(Midia)
    try {
      const listar = await Midia.findAll();
      return res.render('../views/perfil')
      //return res.json(listar);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = contaController;
=======
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
>>>>>>> 1ee7a6a5ba42ca519d56f5dc4f25c70b6e8ac65e
