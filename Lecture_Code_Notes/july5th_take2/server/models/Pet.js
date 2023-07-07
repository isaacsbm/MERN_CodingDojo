const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    animalType: {
        type: String,
        required: [true, "All animals must have a type!"]
    },
    name: {
        type: String
    },
    isSick: {
        type: Boolean,
        required: [true, "Must state whether the animal is sick!"]
    },
    numOfLegs: {
        type: Number,
        min: [1, "All animals must have at least 1 leg(No snakes!)"]
    }
}, {timestamps:true});

module.exports = mongoose.model("Pet", PetSchema);
