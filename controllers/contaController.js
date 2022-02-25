const { Midia } = require('../models');

const contaController = {
  index: async (req, res) => {
    console.log(Midia)
    try {
      const listar = await Midia.findAll();
      return res.render('../views/conta',{
        listaConteudo: listar
      })
      // return res.json(listar);
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = contaController;
