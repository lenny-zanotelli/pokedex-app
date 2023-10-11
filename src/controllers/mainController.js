const { Pokemon } = require('../models');

const mainController = {

    homePage: async (req, res) => {

        try {
            const allPokemon = await Pokemon.findAll({
                includes: ['pokemons']
            });
            res.render('listPokemon', {allPokemon});
        } catch (error) {
            console.log(error)
        }
    },

    detailPokemon: async (req, res) => {
        
        try {
        const numero = req.params.numero;

        const details = await Pokemon.findByPk(numero, {
            include: [
                { association: 'types' } 
            ]
        });
        res.render('detailsPokemon', { details });
            
        } catch (error) {
            console.log(error);
        }
    },


};

module.exports = mainController;