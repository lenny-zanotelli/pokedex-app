const { Pokemon, Type } = require('../models');

const typesController = {
    

    typesPage: async (req, res) => {
        try {
            const allTypes = await Type.findAll();
            res.render('types', {allTypes});
        } catch (error) {
            console.log(error); 
        }
    },

    pokemonByType: async (req, res) => {
        try {
            const id = req.params.typeId;

            const response = await Type.findByPk(id,{
                include: ['pokemons']
            });
            const allPokemon = response.pokemons;
            
            res.render('listPokemon', { allPokemon });
        } catch (error) {
            console.log(error); 
        }
        
    }
}

module.exports = typesController;