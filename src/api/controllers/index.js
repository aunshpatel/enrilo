// @ts-check
// packages and helper functions import
const useCases = require('../use-cases/index')

// use-cases import
const makeGetUsersAction = require('./users/get-users-action')
const makeLoginAdminAction = require('./auth/login-admin-action')

// helpers import
const formatResponse = require('../helpers/format-response')

// use-case declarations
const getUsersAction = makeGetUsersAction({
    getUsers: useCases.getUsers,
    formatResponse,
});
const loginAdminAction = makeLoginAdminAction({
    loginAdmin: useCases.loginAdmin,
    formatResponse,
});

// exports
module.exports = Object.freeze({
    getUsersAction,
    loginAdminAction,
})