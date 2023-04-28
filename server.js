const http = require('http');
const app = require('./app');
const server = http.createServer(app);
require('dotenv').config();
const db = require('./utils/db');
const { Relations } = require('./utils/relations');
const port = process.env.PORT || 8080;
Relations();
db.sync()
    .then(() => {
        server.listen(port, () => {
            console.log(`http://localhost:${port}/`);
        });
    })
    .catch((err) => {
        console.log(`Error💥💥`, err);
    });
