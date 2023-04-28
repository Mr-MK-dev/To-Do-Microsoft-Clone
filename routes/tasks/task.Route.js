const express = require('express');
const taskRoute = express.Router();
const taskController = require('./task.Controller');

taskRoute
    .route('/task')
    .get(taskController.gettasks)
    .post(taskController.createtask);

taskRoute
    .route('/task/:id')
    .get(taskController.gettask)
    .patch(taskController.updatetask)
    .delete(taskController.deletetask);
module.exports = taskRoute;
