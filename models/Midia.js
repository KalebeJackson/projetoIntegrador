module.exports = (sequelize, dataTypes) => {

    const SerieAnime = sequelize.define('SerieAnime', {
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
        capitulo: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
            timestamps: false
    });

    SerieAnime.associate = (Models) => {
        SerieAnime.hasMany(Models.Genero, {  //acessando o model Genero
            trough: 'genero',
            foreignKey: 'genero_id',
            as: 'genero'
        });
        
    }
    return SerieAnime
}