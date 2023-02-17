const dataMapper = require('../dataMapper/dataMapper.js');

const searchController = {

    searchPage: (req, res) => {

        res.render('searchPage');

    },

    searchResults: async (req, res) => {

        const nameSearched = req.body.name;

        const capitalizeFirstLetter = nameSearched.charAt(0).toUpperCase() + nameSearched.slice(1);

        const allPokemon = await dataMapper.getPokemonByName(capitalizeFirstLetter);

        res.render('listPokemon', {allPokemon});
    }

};

module.exports = searchController;