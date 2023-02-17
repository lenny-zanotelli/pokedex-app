const dataMapper = require('../dataMapper/dataMapper.js');

const typesController = {

    typesPage: async (req, res) => {
        const allTypes = await dataMapper.getAllTypes();
        res.render('types', {allTypes});
    },

    pokemonByType: async (req, res) => {
        const type_id = req.params.typeId

        const allPokemon = await dataMapper.getPokemonByTypes(type_id);
        
        res.render('listPokemon', {allPokemon});
    }
}

module.exports = typesController;