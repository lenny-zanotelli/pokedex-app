const { Pokemon, Type } = require('../models');
const { Op } = require("sequelize");

const searchController = {

    searchResults: async (req, res) => {

        const nom = req.body.name;

        const capitalizeFirstLetter = nom.charAt(0).toUpperCase() + nom.slice(1);

        const allPokemon = await Pokemon.findAll({
            where: {
                nom: {
                    [Op.startsWith]: `${capitalizeFirstLetter}`
                }
            }
        })

        res.render('listPokemon', {allPokemon});
    }

};

module.exports = searchController;