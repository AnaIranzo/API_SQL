const express = require('express');
const cowsay = require('cowsay');
const fetch = require('node-fetch');
require('dotenv').config()

//modulos nuestros
const calculator = require('./utils/calculator');
const checkApiKey = require('./middlewares/auth_api_key');
const manage404 = require('./middlewares/error404');
//Rutas
const booksRoutes = require('./routes/booksRoutes');
const productsRoutes = require('./routes/productsRoutes');
const productsApiRoutes = require('./routes/productsApiRoutes');
const pokemonRoutes = require('./routes/pokemonRoutes');
const entriesApiRouter = require('./routes/entriesRoutes');
const authorsApiRouter = require('./routes/authorRoutes');


const app = express();
const port = 3000;
const morgan = require('morgan');//morgan is a Node.js and Express middleware to log HTTP requests and errors

//Template engine
app.set('view engine', 'pug');//config pug a nivel de aplicacion
app.set('views','./views');

//Middleware
app.use(express.json()); //habilitar el tipo de datos que vamos a recibir en el servidor
//app.use(checkApiKey) //habilitar middleware en todas las rutas
app.use(morgan('tiny'));

morgan.token('host', function(req, res) {
    return req.hostname;
});


//Rutas
app.use('/books',booksRoutes);  //Books -> la ruta sera http://localhost:3000/books/(la ruta de la llamada)
app.use('/products',productsRoutes);
app.use('/api/products', productsApiRoutes);
app.use(pokemonRoutes);
app.use('/api/entries', entriesApiRouter);
app.use('/api/authors', authorsApiRouter)


app.get('/', (req, res) => { //request, response
    const calc = calculator.add(2,2)
    //res.send('Hello World!')
    res.render('content',{msj: 'The Bridge', calc})//le podemos pasar parametros a la plantilla
})


app.use(manage404);//va comprobando todas las rutas buscando un error 404-rutas no encontradas


app.listen(port, () => {//debe estar al final
    console.log(
        cowsay.say({
            text : `Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`,
            e : "oO",
            T : "U "
        }))
});
