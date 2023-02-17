const dataMapper = require('../dataMapper/dataMapper.js');

const mainController = {

    homePage: async (req, res) => {

        const allPokemon = await dataMapper.getAllPokemon();
        
        res.render('listPokemon', {allPokemon});
    },

    detailPokemon: async (req, res) => {

        const numero = req.params.numero;

        const onePokemon = await dataMapper.getOnePokemon(numero);
        const pokemonType = await dataMapper.getPokemonType(numero);

        res.render('detailsPokemon', {onePokemon, pokemonType});
    },


};

module.exports = mainController;