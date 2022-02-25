const bcrypt = require('bcrypt');
const fs = require('fs');

const path = require('path');
const {Usuario} = require('../models')



const cadastroController = {
  index: (req, res) => {
    res.render('cadastro')
  },
  store: async (req, res) => {
    const { nome, email, senha, confirmaSenha } = req.body;

    if (senha !== confirmaSenha) {
      return res.render('cadastro', { erro: 'Senhas não coincidem' });
    };
    
    const emailJaExiste = await Usuario.findOne({ where: {email: email} });
    console.log(emailJaExiste);

        if (emailJaExiste) {
      return res.render('cadastro', { erro: 'Email já utilizado. Tente outro' });
    }

    const usuario = {
      nick: nome, 
      email,
      senha: bcrypt.hashSync(senha, 10),
      permissao:'Moderador'
    };

    await Usuario.create (usuario)


    // usuariosModel.push(usuario);

    // fs.writeFileSync(__dirname + '/../models/usuarios.json', JSON.stringify(usuariosModel))

    res.redirect('/login');
  }
};

module.exports = cadastroController;