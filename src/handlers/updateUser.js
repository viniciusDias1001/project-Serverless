const { connectDatabase } = require("../database/db");
const User = require("../model/user");

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDatabase();

        const { email, password, name } = JSON.parse(event.body);
        let userObj = {
            email,
            name,
            password,
        };

        userObj = await User.findByIdAndUpdate(event.pathParameters.id, userObj, { new: true });
        return {
            statusCode: 204
           
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
}