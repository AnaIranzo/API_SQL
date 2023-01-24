const express = require('express');
// Rutas de productos
const entriesApiController = require("../controllers/entriesAPIController");
const entriesApiRouter = express.Router();

entriesApiRouter.get('/',entriesApiController.getEntries);
entriesApiRouter.post('/',entriesApiController.createEntry);
entriesApiRouter.delete('/',entriesApiController.deleteEntries);
entriesApiRouter.put('/',entriesApiController.updateEntry);

module.exports = entriesApiRouter;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
// PUT http://localhost:3000/api/entries?title=El rayo gana la champions
// DELETE http://localhost:3000/api/entries/?id_entry=3


/* {
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"} */