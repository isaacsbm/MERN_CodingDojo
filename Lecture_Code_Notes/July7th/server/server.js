const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

//!Require Mongoose config!
require("./config/mongoose.config")

app.use(express.json(), express.urlencoded({extended: true}));

//!require routes!
const RecordRoutes = require('./routes/recordRoutes');
RecordRoutes(app);

app.listen(8000, () => console.log("Server up and running on port 8000!"))