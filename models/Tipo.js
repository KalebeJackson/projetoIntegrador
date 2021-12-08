module.exports = (sequelize, dataTypes) => {

    const Tipo = sequelize.define('Tipo', {
        id: {
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
    return Tipo
}