const TABLE_NAME = 'users';
function makeUsersDb({
    mysql2Connection
}) {
    return Object.freeze({
        getAllUsers,
    })
    async function getAllUsers(){
        const query = `SELECT * FROM ${TABLE_NAME}`;
        const results = await mysql2Connection.executeQuery({
            query
        })
        return results;
    }
}
module.exports = makeUsersDb;