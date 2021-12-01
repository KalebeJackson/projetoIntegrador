module.exports = (sequelize, dataTypes) => {

    const Usuario = sequelize.define('Usuario', {
        id: {
            type: dataTypes.INTEGER, 
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nick: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        email: { 
            type: dataTypes.STRING,
            allowNull: false,
        },
        senha: {
            type: dataTypes.STRING,
            allowNull: false
        }

    })
    return Usuario
}