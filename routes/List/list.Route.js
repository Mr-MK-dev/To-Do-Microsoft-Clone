const express = require('express');
const listRoute = express.Router();
const listController = require('./list.Controller');

listRoute
    .route('/list')
    .get(listController.getLists)
    .post(listController.createList);

listRoute
    .route('/list/:id')
    .get(listController.getlist)
    .patch(listController.updateList)
    .delete(listController.deleteList);
module.exports = listRoute;
