const perfilController = {
    index: (req,res) =>{
        return res.render('editarPerfil')
    },
    update: async (req, res) => {
        const {nome, username, bio,email } = req.body
        const {id} = req.params
        const update = findOne({where: {id}})
    }
}

    module.exports = perfilController