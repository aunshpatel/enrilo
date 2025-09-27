module.exports = function makeLoginAdmin({usersDb}) {
    return async function loginAdmin({req}) {
        try {
            // const users = await usersDb.getAllUsers();
            // return users;
            console.info(`_loginAdmin`);
            console.info(req);
            return true;
        } catch (error) {
            console.log('Error at loginAdmin');
            console.log(error);
        }
    }
}