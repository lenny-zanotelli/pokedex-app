const Pokemon = require('./pokemon');
const Type = require('./type');


// Pokemon <-> Type (Many to Many)

Pokemon.belongsToMany(Type, {
    as: 'types',
    through: 'pokemon_type',
    foreignKey: 'pokemon_numero',
    otherKey: 'type_id'
});

Type.belongsToMany(Pokemon, {
    as: 'pokemons',
    through: 'pokemon_type',
    foreignKey: 'type_id',
    otherKey: 'pokemon_numero'
});

module.exports = { Pokemon, Type };

