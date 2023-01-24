//http://localhost:3000/products?API_KEY="12354djd"

const checkApiKey = function(req,res,next){
    // Primero consulta a la BBDD
    //Comprobar si existe API KEY en BBDD
    // ...
    if(req.query.API_KEY==="123abc"){
        next(); // Pasa a la siguiente tarea si todo esta bien
    }else{
        //Mando mensaje de error
        res.status(401).send("Error. API KEY no proveída");
    }
}

module.exports = checkApiKey;//estamos exportando esta variable