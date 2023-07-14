const ProductController = require("../controllers/ProductController");

module.exports = app => {
    app.get("/api/products", ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getOneProduct);
    app.post('/api/products', ProductController.createProduct);
    app.patch("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
};