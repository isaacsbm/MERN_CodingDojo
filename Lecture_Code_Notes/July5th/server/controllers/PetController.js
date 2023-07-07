const Pet = require("../models/Pet");

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json(allPets))
        .catch(err => console.log(err));
}

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(newPet => res.json(newPet))
        .catch(err => console.log(err));
}

