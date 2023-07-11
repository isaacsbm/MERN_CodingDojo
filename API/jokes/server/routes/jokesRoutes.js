const JokesController = require("../controllers/JokesControllers");

module.exports = app => {
    app.get("/api/jokes", JokesController.getAllJokes);
    app.post("/api/jokes", JokesController.createJoke);
    app.get("/api/jokes/:id", JokesController.getOneJoke);
    app.patch("/api/jokes/:id", JokesController.updateJoke);
    app.delete("/api/jokes/:id", JokesController.deleteForever);
};