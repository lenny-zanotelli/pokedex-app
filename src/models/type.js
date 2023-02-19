const {
    Model,
    DataTypes 
} = require('sequelize');

const sequelize = require('./database.js');

class Type extends Model {}

Type.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: sequelize,
    tableName: "type"

});


module.exports = Type;