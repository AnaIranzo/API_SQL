const fetch = require('node-fetch');

const getApiProduct =  async (req, res) => {//rutas de api se pone /api para que no se pise con otras rutas
    if (req.params.id) { //con id
        try {
            let response = await fetch(`https://fakestoreapi.com/products/${req.params.id}`); //{}
            let products = await response.json(); //{}
            res.status(200).json(products); // respuesta de la api para un producto
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    } else { // sin id
        try {
            let response = await fetch(`https://fakestoreapi.com/products`); // []
            let products = await response.json(); // []
            res.status(200).json(products);; // respuesta de la api para muchos  productos
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
        }
    }
};
const createApiProduct = async (req, res) => {
    console.log("Esto es el consol.log de lo que introducimos por postman",req.body); // Objeto recibido de producto nuevo

    const newProduct = req.body; // {} nuevo producto a guardar, sin id, el id se lo asigna la base de datos

    // Líneas
    //para guardar 
    // en una BBDD SQL o MongoDB

    //como no tenemos una base de datos se lo mandamos a fake store api que acepta post
    let response = await fetch('https://fakestoreapi.com/products', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' //hay que decirle que le enviamos un json
        },
        body: JSON.stringify(newProduct) //lo que mandas por internet hay que convertirlo en string
    });
    let answer = await response.json(); // objeto de vuelta de la petición
    console.log("Este es el console.log de lo que devuelve la api",answer);

    res.status(201).json({msj:`Producto ${answer.title} guardado en el sistema con ID: ${answer.id}`, 'PRODUCT': answer});//le pasamos el nuevo producto y lo nombramos PRODUCT
};

module.exports = {
    getApiProduct,
    createApiProduct,
};