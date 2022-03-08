module.exports = (sequelize, dataTypes) => {

    const Midia = sequelize.define('Midia', {
        id: {
            type: dataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        ano_lancamento: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        temporada: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        episodio: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        duracao: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        paginas: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        capitulos: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        imagem: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    },
       {
            timestamps: false,
            tableName: "midia"
        }
    )
    Midia.associate = (Models) => {
        Midia.hasMany(Models.Genero, { //acessando o model Genero
            trough: 'genero',
            foreignKey: 'genero_id',
            as: 'genero'
        });

    }
    return Midia
}