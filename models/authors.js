const pool = require('../utils/db_pgsql')
const authorQueries = require('../queries/author.queries')


// GET
const getAuthorByEmail = async (email) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion, devuelve una variable cliente
        //el metodo query se encarga de comprobar la variable que le pasas, en el primer parametro la query parametrizada y en el segundo el array con los elementos que tiene que comprobar $1 refiere el parametro 1, aqui $1 es email, comprueba email 
        const data = await client.query(authorQueries.getAuthorByEmail,[email])
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{//vaya bien o mal hay que liberar la conexion. Usar try, catch, finally
        client.release();    
    }
    return result
}

// GET
const getAllAuthors = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(authorQueries.getAllAuthors)
        result = data.rows
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

// CREATE
const createAuthor = async (author) => {
    const {name,surname,id_author,email,image} = author;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(authorQueries.createAuthor,[name,surname,id_author,email,image])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

// UPDATE
const updateAuthor =  async (entry,emailAuth) => {
    const {image,name} = entry
    const  email = emailAuth;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(authorQueries.updateAuthor,[name,image,email])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}

// DELETE 
const deleteAuthor = async (id_author) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(authorQueries.deleteAuthor,[id_author])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}


const authors = {
    getAuthorByEmail,
    getAllAuthors,
    createAuthor,
    deleteAuthor,
    updateAuthor,
    
}

module.exports = authors;