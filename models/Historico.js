module.exports = (sequelize, dataTypes) => {

    const Historico = sequelize.define('Historico', {
        genero_id: {
            type: dataTypes.INTEGER, 
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    })

    return Historico
}