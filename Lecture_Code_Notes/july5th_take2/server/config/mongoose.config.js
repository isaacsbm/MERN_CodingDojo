const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/petshelter", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the DB!", err));

require("../models/Pet");