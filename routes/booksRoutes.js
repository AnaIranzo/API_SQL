const express = require('express');
const booksRouter = express.Router();
const checkApiKey = require('../middlewares/auth_api_key');
const booksController = require('../controllers/booksController');


//CRUD --> CREATE, READ, UPDATE, DELETE
//Hay que programar todo lo que se puede hacer en el servidor
//http://localhost:3000/books --> probar en thunderclient misma ruta, puedo hacer operaciones distintas cambiando el metodo

// CREATE -crear un libro
//dentro del request tiene que estar toda la informacion de lo que quiero crear

/* const a = {
    "title": "Don Quijote de la Mancha",
    "year": 1605,
    "description": "En un lugar de la mancha..."
} */
booksRouter.post('/',checkApiKey, booksController.createBook);


// READ-leer un libro
booksRouter.get('/', booksController.getBook);
// UPDATE -actualizar un libro
booksRouter.put('/',checkApiKey, booksController.editBook);
// DELETE -borrar un libro
booksRouter.delete('/',checkApiKey, booksController.deleteBook);

module.exports = booksRouter;