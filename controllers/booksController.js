//creamos las funciones y las exportamos en un objeto

const createBook = (req, res)=> {//al meter aqui el middleware de checkapikey, solo bloquea el acceso aqui
    console.log("***********DATOS ENVIADOS*************");
    console.log(req.body);//en req estan los datos
    const {title} = req.body
    res.status(201).json({msj: `Has mandado un POST!. Creado libro ${title}`});// al res le podemos pasar el status (201 creado)
    //en el post en vez de send se envia json 
}
const getBook = (req, res)=> {
    res.status(200).send('Has mandado un GET!');
}
const deleteBook =(req, res)=> {
    res.send('Has mandado un DELETE!');
}
const editBook = (req, res)=> {
    res.status(202).send('Has mandado un PUT!');
}

module.exports = {
    createBook,
    getBook,
    deleteBook,
    editBook
}