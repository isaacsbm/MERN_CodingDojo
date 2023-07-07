const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    animalType: {
        type: String
    },
    name: {
        type: String
    },
    isSick: {
        type: Boolean
    },
    numOfLegs: {
        type: Number
    }
}, {timestamps:true});

module.exports = mongoose.model("Pet", PetSchema);
