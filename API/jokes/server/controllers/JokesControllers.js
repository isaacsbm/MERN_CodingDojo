const Jokes = require("../models/Jokes");

module.exports.getAllJokes = (req, res) => {
    Jokes.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err));
};

module.exports.getOneJoke = (req, res) => {
    Jokes.findById({ _id: req.params.id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json(err));
}

module.exports.createJoke = (req, res) => {
    Jokes.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json(err));
};

module.exports.updateJoke = (req, res) => {
    Jokes.findByIdAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => json(err))
};

module.exports.deleteForever = (req, res) => {
    Jokes.findByIdAndDelete({_id: req.params.id})
    .then(result => res.json({result:result}))
    .catch(err => json(err))
}