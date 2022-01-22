module.exports = (sequelize, dataTypes) => {
    const Genero = sequelize.define('Genero', {
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
    },
    {
        timestamps: false,
        tableName: "genero"
    }
    )

    Genero.associate = (Models) => {
        Genero.belongsTo(Models.Midia, {  //acessando o model Midia
            trough: 'genero',
            foreignKey: 'genero_id',
            as: 'genero',
            timestamps: false
        });
    }
    return Genero
}