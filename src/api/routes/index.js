const express = require('express');
const routes = express.Router();
const allControllers = require('../controllers/index')

routes.get(`/users`, allControllers.getUsersAction);
routes.post(`/admin-login`, allControllers.loginAdminAction);

module.exports = routes;