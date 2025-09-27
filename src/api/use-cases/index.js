// @ts-check
// packages and helper functions import

// use-cases import
import makeGetUsers from './users/get-users';
import makeLoginAdmin from './auth/login-admin';
import { usersDb as _usersDb } from '../data-access/index';

// use-case declarations
const getUsers = makeGetUsers({
    usersDb: _usersDb,
});
const loginAdmin = makeLoginAdmin({
    usersDb: _usersDb,
});

// exports
export default Object.freeze({
    getUsers,
    loginAdmin,
})