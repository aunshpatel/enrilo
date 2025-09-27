module.exports = function makeGetUsers({usersDb}) {
    return async function getUsers({req}) {
        try {
            console.info('getUsers');
            const users = await usersDb.getAllUsers();
            return users;            
        } catch (error) {
            console.log('Error at getUsers');
            console.log(error);
        }
    }
}