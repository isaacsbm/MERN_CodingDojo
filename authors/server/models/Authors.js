const mongoose = require("mongoose");

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,

    }
}, {timestamps: true});

model.exports = mongoose.model("Authors", AuthorsSchema);