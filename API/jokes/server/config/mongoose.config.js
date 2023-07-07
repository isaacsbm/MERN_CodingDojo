const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/jokes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res =>
        console.log("Established a connection the database"))
    .catch(err =>
        console.log("Something went wrong when connecting to database", err));

require("../models/Jokes");