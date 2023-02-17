const client = require('../database');

const dataMapper = {

    getAllPokemon: async () => {

        const query = `SELECT * FROM pokemon;`;
        const result = await client.query(query);

        return result.rows;
    },

    getOnePokemon: async (numero) => {
        const query =  `SELECT * FROM pokemon WHERE numero = ${numero}`;
        const result = await client.query(query);

        return result.rows[0];
    },

    getPokemonType: async (numero) => {
        const query =  `SELECT * FROM pokemon JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero JOIN type ON pokemon_type.type_id = type.id WHERE pokemon_type.pokemon_numero = ${numero};`;
        const result = await client.query(query);

        return result.rows;
    },

    getAllTypes: async () => {
        const query = `SELECT * FROM type`
        const result = await client.query(query);
        
        return result.rows;
    },

    getPokemonByTypes: async (typeId) => {
        const query = `SELECT * FROM pokemon JOIN pokemon_type ON pokemon.numero = pokemon_type.pokemon_numero WHERE pokemon_type.type_id = ${typeId};`;
        const result = await client.query(query);

        return result.rows;
    },

    getPokemonByName: async (name) => {
        const query = `SELECT * FROM pokemon WHERE nom LIKE '${name}%';`;
        const result = await client.query(query);

        return result.rows;
    }
}

module.exports = dataMapper;