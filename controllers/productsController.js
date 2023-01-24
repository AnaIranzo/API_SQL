const fetch = require('node-fetch');

const getProduct = async (req, res) => {
    if (req.params.id) { //con id
        try {
            let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
            let products = await response.json(); //{}
            res.render('products', { "products": [products] }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    } else { // sin id
        try {
            let response = await fetch(`https://fakestoreapi.com/products`); // []
            let products = await response.json(); // []
            res.render('products', { products }); // Pinta datos en el pug
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    };
};

module.exports = getProduct;