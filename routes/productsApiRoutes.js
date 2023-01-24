const express = require('express');
const fetch = require('node-fetch');
const productsApiController = require('../controllers/productsApiController');
const productsApiRouter = express.Router();


productsApiRouter.get('/:id?', productsApiController.getApiProduct);

//POST http://localhost:3000/api/products
productsApiRouter.post('/', productsApiController.createApiProduct);

module.exports = productsApiRouter;