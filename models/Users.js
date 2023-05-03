const { Sequelize } = require('sequelize');
const mySql = require('../utils/db');
const User = mySql.define('User', {
    ID_KEY: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    photo: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    active: {
        type: Sequelize.BOOLEAN,
    },
    token: {
        type: Sequelize.STRING,
    },
});

module.exports = User;
