//el controlador llama a los metodos del modelo, decide que accion hacer
const entry = require('../models/entries');//llama a los métodos

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
        if (entries.length <= 0) {
            res.status(400).json({msj: `No existen entradas asociadas a ese email`});
        }else{
            res.status(200).json(entries); // [] con las entries encontradas
        }
    }
    else {
        entries = await entry.getAllEntries();
        res.status(200).json(entries); // [] con las entries encontradas
    }
    
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    
        const newEntry = req.body; // {title,content,email,category}
        let entries;
        entries = await entry.getEntriesByEmail(req.body.email);
        if (entries.length <= 0) {
            res.status(400).json({msj: `Para crear una entrada el email debe estar en la base de datos`});
        }else{
            try {
                const response = await entry.createEntry(newEntry);
                res.status(201).json({
                "items_created": response,
                data: newEntry
            });
            } catch (error) {
                res.status(400).json({msj: `Asegurese de que el titulo no esta repetido`});
            }
            
        }

}

//DELETE
const deleteEntries = async (req,res)=> {
    let entries;
    entries = await entry.deleteEntry(req.query.id_entry);
    res.send('Entrada borrada');
}

//UPDATE
const updateEntry = async (req, res) => {
    const title = req.query.title
    const updatedEntry = req.body; // {content,category}
    const response = await entry.updateEntry(updatedEntry,title);
    res.status(201).json({
        "items_updated": response,
        data: updatedEntry
    });
}
/* {

    "content":"va a triunfar esto2",
    "category":"sucesos"} */



module.exports = {
    getEntries,
    createEntry,
    deleteEntries, //--> DELETE
    updateEntry, //--> PUT

}