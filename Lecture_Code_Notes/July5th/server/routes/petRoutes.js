const PetController = require("../controllers/PetController");

module.exports = app => {
    app.get("/api/pets", PetController.findAllPets);
    app.post("/api/pets", PetController.createPet)
};