const express = require('express');
const pokemonRouter = express.Router();

// http://localhost:3000/pokemon?a=1&b=2
// http://localhost:3000/pokemon
// http://localhost:3000/pokemon?aaaaaa=34
pokemonRouter.get('/pokemon', (req, res) => {
    console.log(req.query);
    const {a,b} = req.query;
    console.log(a,b)
    if(a && b){
        const calc = calculator.sub(a,b);
        //res.send(`Ahí va pikachu! ${a}-${b} es ${resta}`)
        const msj2 = `de ${a}-${b}`
        const pokemons = ['Bulbasur', 'Pikachu', 'Charmander']
        res.render('content',{msj:'Ahí va pikachu!',msj2, calc, pokemons})
    }
    else{
        res.send(`Ahí va pikachu!`)
    }  
});

module.exports = pokemonRouter;