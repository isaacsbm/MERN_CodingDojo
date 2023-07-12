const ProductController = require("../controllers/ProductController");

module.exports = app => {
    app.get("/api/product", ProductController.getAllProducts);
    app.post("/api/product", ProductController.createProduct);
    app.patch("/api/product/:id", ProductController.getOneProduct);
    app.delete("/api/product/:id", ProductController.deleteProduct)
};