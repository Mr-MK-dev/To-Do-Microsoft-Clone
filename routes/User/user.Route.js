const express = require('express');
const userRoute = express.Router();
const userController = require('./user.Controller');

userRoute.route('/user/login').post(userController.login);
userRoute.route('/user/signup').post(userController.signup);

module.exports = userRoute;
