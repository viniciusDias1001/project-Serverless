const mongoose = require("mongoose");


const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, "Please add a name"],
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    users: {
        type: Array, 
        of: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "User",
            required: true,
        },
        required: true,
    },
    mensagens: {
        type: Array,
        for: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: "Mensage",
        }
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
   
});



module.exports = mongoose.model("Group", GroupSchema);