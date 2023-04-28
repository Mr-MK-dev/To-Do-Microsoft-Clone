const { Sequelize } = require('sequelize');
const myDb = require('../utils/db');
const List = myDb.define('List', {
    ID_KEY: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    list_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
});

module.exports = List;
