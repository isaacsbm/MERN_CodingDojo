
const apiControllers = require('../controllers/apiControllers')
const ApiController = require('../controllers/apiControllers')


module.exports = (app) => {
    app.get("/api", apiControllers.api)
    app.get("/api/greet", apiControllers.greeting)
}