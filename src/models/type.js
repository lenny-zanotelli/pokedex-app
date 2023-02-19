const {
    Model,
    DataTypes 
} = require('sequelize');

const sequelize = require('../database.js');

class Type extends Model {}

Type.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: "type"

});


module.exports = Type;