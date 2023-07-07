const mongoose = require('mongoose');

const JokesSchema = new mongoose.Schema({

}, {timestamps: true});

module.exports = mongoose.model("Jokes", JokesSchema);