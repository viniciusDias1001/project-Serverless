const { connectDatabase } = require("../database/db");
const User = require("../model/user");


module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        await connectDatabase();

        userObj = await User.findByIdAndDelete(event.pathParameters.id);
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
    