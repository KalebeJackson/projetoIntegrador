const { v4: uuid } = require('uuid');
const storage = require('../config/storage')
const fs = require('fs');


const cadastroController = {
    index: (req, res) => {
        let content = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(content) 
                
    },

    store: (req, res) => {
        return res.render('/cadastro');
    },

    save: (req, res) => {
        const { nome, valor } = req.body
        const avatar = '/img/cadastro/' + req.file.originalname

        let content = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(content)
        
        db.servicos.push({ id: uuid(), nome, valor: Number(valor), avatar})
        
        content = JSON.stringify(db)
        fs.writeFileSync("./db.json", content, "utf8")
        
        return res.redirect('/cadastro');
    },

    edit: (req, res) => {
        const { id } = req.params
        let content = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(content)
        
        const cadastro = db.cadastro.find(cadastro => cadastro.id == id);

        return res.render('cadastro/edit', { cadastro })
    },

    update: (req, res) => {
        const { nome, valor } = req.body
        const { id } = req.params
        
        let content = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(content)
        
        const cadastroIndex = db.cadastro.findIndex(cadastro => cadastro.id == id); 
        
        if (req.file) {
            avatar = '/img/cadastro/' + req.file.originalname
        }

        const cadastroAtualizado = {
            id,
            nome,
            email,
            avatar
        }
        
        db.cadastro[cadastroIndex] = cadastroAtualizado; 
        
        content = JSON.stringify(db)
        fs.writeFileSync("./db.json", content, "utf8")


        return res.redirect('/cadastro');
    },

    delete: (req, res) => {
        const { id } = req.params;
        let content = fs.readFileSync("./db.json", "utf8")
        const db = JSON.parse(content)
        
        db.cadastro.push({ id: uuid(), nome, email, avatar})
        
        const cadastroIndex = db.cadastro.findIndex(cadastro => cadastro.id == id);
        
        db.cadaastro.splice(cadastroIndex, 1);
        
        content = JSON.stringify(db)
        fs.writeFileSync("./db.json", content, "utf8")
        
        return res.redirect('/cadastro');
    }
}

module.exports = cadastroController