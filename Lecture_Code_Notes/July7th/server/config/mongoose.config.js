const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/vinyl", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then( () => console.log("Your database is running!"))
    .catch(err => ("Something went wrong when connecting to the database", err))

    //!Require model
require("../models/Record")
