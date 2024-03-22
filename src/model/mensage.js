const mongoose = require("mongoose");
const validator = require("validator");
const User = require("./use");

const GroupSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
});

module.exports = mongoose.model("Mensage", GroupSchema);