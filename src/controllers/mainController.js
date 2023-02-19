const { Pokemon, Type } = require('../models');

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
        console.log(details.types[1]);
        res.render('detailsPokemon', { details });
            
        } catch (error) {
            console.log(error);
        }

        // const onePokemon = await dataMapper.getOnePokemon(numero);
        // const pokemonType = await dataMapper.getPokemonType(numero);


    },


};

module.exports = mainController;