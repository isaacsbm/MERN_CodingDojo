const AuthorsController = require("../controllers/AuthorsControllers");

module.exports = app => {
    app.get('/api/authors', AuthorsController.findAllAuthors);
    app.get('/api/authors/:id', AuthorsController.getOneAuthor);
    app.patch('/api/authors/:id', AuthorsController.updateAuthor);
    app.post('/api/authors', AuthorsController.createAuthor);
    app.delete('/api/authors/:id', AuthorsController.deleteAuthor);
};