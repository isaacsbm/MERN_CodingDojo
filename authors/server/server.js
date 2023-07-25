const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

//!Require Config

app.use(express.json(), express.urlencoded({extended: true}));

//! Require Routes

app.listen(port, ()=> console.log("The Server is listening on port " + port));


