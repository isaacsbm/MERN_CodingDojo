const express = require("express");
const app = express();
const port = 3000;
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

const JokesRoutes = require("./routes/jokesRoutes");
JokesRoutes(app);

app.listen(port, ()=> console.log("The Server is listening on port "+ port))