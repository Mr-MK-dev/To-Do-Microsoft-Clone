const express = require('express');
const userRoute = express.Router();
const userController = require('./user.Controller');
const middleware = require('../../middlewares/auth');

userRoute.route('/user/login').post(userController.login);
userRoute.route('/user/signup').post(userController.signup);
userRoute
    .route('/user/welcome')
    .post(middleware.auth, userController.helloPage);

module.exports = userRoute;
