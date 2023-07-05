const ApiController = require("../controllers/apiController");

module.exports = (app) => {
    app.get("/api/users/new", ApiController.user);
    app.get("/api/companies/new", ApiController.company);
    app.get("/api/user/company", ApiController.companyUser)
}