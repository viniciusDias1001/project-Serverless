const { connectDatabase } = require("../database/db");
const User = require("../model/userModel");


module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    try {
        await connectDatabase();

        userObj = await User.findByIdAndDelete(event.pathParameters.id);
        return {
            statusCode: 200,
            body: JSON.stringify(userObj),
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({ error: err.message }),
        };
    }
}
    