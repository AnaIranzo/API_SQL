const pool = require('../utils/db_pgsql')
const entryQueries = require('../queries/entry.queries')

// GET
const getEntriesByEmail = async (email) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion, devuelve una variable cliente
        //el metodo query se encarga de comprobar la variable que le pasas, en el primer parametro la query parametrizada y en el segundo el array con los elementos que tiene que comprobar $1 refiere el parametro 1, aqui $1 es email, comprueba email 
        const data = await client.query(entryQueries.getEntriesByEmail,[email])
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
const getAllEntries = async () => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(entryQueries.getAllEntries)
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
const createEntry = async (entry) => {
    const {title,content,email,category} = entry;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(entryQueries.createEntry,[title,content,email,category])
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
const deleteEntry = async (idEntry) => {
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(entryQueries.deleteEntry,[idEntry])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();
    }
    return result
}
//UPDATE

const updateEntry =  async (entry,titleEntry) => {
    const {content,category} = entry
    const  title = titleEntry;
    let client,result;
    try{
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(entryQueries.updateEntry,[content,category,title])
        result = data.rowCount
    }catch(err){
        console.log(err);
        throw err;
    }finally{
        client.release();    
    }
    return result
}
const entries = {
    getEntriesByEmail,
    getAllEntries,
    createEntry,
    deleteEntry,
    updateEntry,
    
}

module.exports = entries;


// Pruebas

/*     getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data))//lo enganchamos a un GET */



/* getAllEntries()
.then(data=>console.log(data)) */


/* 
let newEntry = {
    title:"noticia desde Node",
    content:"va a triunfar esto2",
    email:"alejandru@thebridgeschool.es",
    category:"sucesos"}

createEntry(newEntry)
.then(data=>console.log(data))//lo enganchamos con un POST */

