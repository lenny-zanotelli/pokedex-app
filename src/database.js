const { Sequelize } = require('sequelize');
const pg = require('pg');
require('dotenv').config();

const sequelize = new Sequelize(process.env.PG_DB, process.env.PG_USER,process.env.PG_PASSWORD, {
    host: process.env.PG_HOST,
    dialect: 'postgres',
    define: {
        underscored: true
    }
    
    
});
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });




module.exports = sequelize;