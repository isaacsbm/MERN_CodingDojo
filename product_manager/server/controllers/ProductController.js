const Product = require("../models/Product");

module.exports.createProduct = (req, res) => {
    Product.create()
        .then(newProduct => res.json(newProduct))
        .catch(err => console.log(err))
};

module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            console.log("All Products Grabbed!")
            res.json(allProducts)})
        .catch(err => console.log(err))
};

module.exports.getOneProduct = (req, res) => {
    Product.findById({ _id: req.params.id})
        .then(oneProduct => res.json(oneProduct))
        .catch(err => res.json(err))
};

module.exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(
        { _id: req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then(updatedProduct => res.json(updatedProduct))
        .catch(err => res.json(err))
};

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json(err))
};