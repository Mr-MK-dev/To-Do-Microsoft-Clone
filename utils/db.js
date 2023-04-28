const mkSql = require('sequelize');
require('dotenv').config();
console.log(process.env.DB_PASSWORD.toString());
const myConnect = new mkSql(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.host,
        dialect: 'mysql',
    }
);

module.exports = myConnect;
