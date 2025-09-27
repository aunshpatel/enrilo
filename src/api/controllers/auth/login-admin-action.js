// @ts-check
module.exports = function makeLoginAdminAction({loginAdmin, formatResponse}) {
    return async function loginAdminAction({req}) {
        try {
            console.info(`_loginAdminAction`);
            console.info(req);
            const resp = await loginAdmin({req});
            return formatResponse({
                status: 200,
                data: resp,
                message: "Logged in successfully."
            });            
        } catch (error) {
            console.log('Error at loginAdminAction');
            console.log(error);
        }
    }
}