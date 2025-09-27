module.exports = function makeGetUsersAction({getUsers, formatResponse}) {
    return async function getUsersAction({req}) {
        try {
            const users = await getUsers({req});
            return formatResponse({
                status: 200,
                data: users,
                message: "List of users found."
            });            
        } catch (error) {
            console.log('Error at getUsersAction');
            console.log(error);
        }
    }
}