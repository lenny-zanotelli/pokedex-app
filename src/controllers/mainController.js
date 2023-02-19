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

        const numero = req.params.numero;

        const onePokemon = await dataMapper.getOnePokemon(numero);
        const pokemonType = await dataMapper.getPokemonType(numero);

        res.render('detailsPokemon', {onePokemon, pokemonType});
    },


};

module.exports = mainController;