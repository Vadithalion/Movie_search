const Sequelize = require('sequelize');

const sequelize = require('./sequelize');

class Movie extends Sequelize.Model {};

Movie.init(
    {
        title: { type: Sequelize.TEXT }, 
        description: { type: Sequelize.STRING  },
        author: { type: Sequelize.STRING}
    },
    {
        sequelize,
        modelName: 'movie'
    }
);

Movie.sync({ force: true }).then(() => {
    return Movie.create({
        title: 'Soy leyenda',
        description: '2020 pero en peli',
        author: 'Will'
    })
});

module.exports = { Movie };