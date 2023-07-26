const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

const AuthorsRoutes = require("./routes/AuthorsRoutes")
AuthorsRoutes(app);

app.listen(port, ()=> console.log("The Server is listening on port " + port));


