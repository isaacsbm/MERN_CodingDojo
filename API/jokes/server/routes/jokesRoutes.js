const JokesController = require("../controllers/JokesControllers");

module.exports = app => {
    app.get("/api/jokes", JokesController.getAllJokes);
    app.get("/api/jokes/:id", JokesController.getOneJoke);
    app.post("/api/jokes", JokesController.createJoke);
    app.patch("/api/jokes/:id", JokesController.updateJoke);
    app.delete("/api/jokes/:id", JokesController.deleteForever);
};