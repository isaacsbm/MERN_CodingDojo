const express = require("express");
const app = express();
const port = 8000;
require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

app.listen(port, ()=> console.log("The Server is listening on port "+ port));