const express = require('express');
// Rutas de productos
const authorApiController = require("../controllers/authorsAPIController");
const authorsApiRouter = express.Router();

authorsApiRouter.get('/',authorApiController.getAuthors);
authorsApiRouter.post('/',authorApiController.createAuthor);
authorsApiRouter.put('/',authorApiController.updateAuthor);
authorsApiRouter.delete('/',authorApiController.deleteAuthor);


module.exports = authorsApiRouter;
//GET http://localhost:3000/api/authors
//GET http://localhost:3000/api/authors/?email=birja@thebridgeschool.es
// POST http://localhost:3000/api/authors
// PUT http://localhost:3000/api/entries/author/?email=alejandru@thebridgeschool.es
// DELETE http://localhost:3000/api/authors/?id_author=10