// packages and helper functions import

// use-cases import
const makeUsersDb = require('./users-db');
const mysql2Connection = require('./mysql');

// use-case declarations
const usersDb = makeUsersDb({
    mysql2Connection
});

// exports
module.exports = Object.freeze({
    usersDb,
})