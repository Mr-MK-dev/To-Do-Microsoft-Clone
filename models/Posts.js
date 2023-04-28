const { Sequelize } = require('sequelize');
const mysql = require('../utils/db');

const Post = mysql.define('Post', {
    ID_KEY: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    post_title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    listId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    FutureDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    Favorite: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
    },
    isDone: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
    },
});

module.exports = Post;
