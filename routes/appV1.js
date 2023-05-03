var listRoute = require('./List/list.Route');
var taskRoute = require('./tasks/task.Route');
var userRoute = require('./User/user.Route');
var express = require('express');

var appRouter = express.Router();

appRouter.use('/api', listRoute);
appRouter.use('/api', taskRoute);
appRouter.use('/api', userRoute);

module.exports = appRouter;
