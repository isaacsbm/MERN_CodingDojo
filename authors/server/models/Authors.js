const mongoose = require('mongoose');

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true],
        minLength: [3, "Authors must have at least three characters!"]
    }
}, {timestamps: true});

module.exports = mongoose.model("Authors", AuthorsSchema);