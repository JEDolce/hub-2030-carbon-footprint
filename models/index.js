// Set up the database with Sequelize ORM
const { Sequelize, DataTypes } = require('sequelize');
const { dbConfig } = require("../config/config");

const sequelize = new Sequelize(
    `postgres://${dbConfig.USER}:${dbConfig.PASSWORD}@${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    dialect: "postgres"
})

// Check if connection is done
sequelize.authenticate().then(() => {
    console.log('DB connected successfully')
}).catch((err) => {
    console.log(err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Connecting to model
db.users = require('./userModel')(sequelize, DataTypes);

module.exports = db;