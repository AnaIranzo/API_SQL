const express = require('express');
const fetch = require('node-fetch');
const getProduct = require('../controllers/productsController');
const productsRouter = express.Router();



// http://localhost:3000/product/1
// http://localhost:3000/product/3
// http://localhost:3000/product/6
// http://localhost:3000/product

/* productsRouter.get('/product/:id?', (req, res) => {//expresion regular parte de la ruta. ?opcional
    console.log(req.params);//todo lo que va despues de los : son params
    if (req.params.id) {
        //Llamadas a la BBDD
        //Para traer la noticia con id adecuado
        res.send('te mando el producto número '+req.params.id)
    }
    else {
        res.send('Ahí van los productos')
    } 
}) */

// GET products http://localhost:3000/products/3
// GET products http://localhost:3000/products/4
// GET products http://localhost:3000/products
productsRouter.get('/:id?', getProduct);

/* productsRouter.get('/detail', (req, res) => {
    res.json({ //puedo meter un objeto
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
        "rate": 3.9,
        "count": 120
        }
        })
}) */

module.exports = productsRouter;