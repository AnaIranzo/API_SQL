const author = require('../models/authors')


// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
const getAuthors = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await author.getAuthorByEmail(req.query.email);
    }
    else {
        authors = await author.getAllAuthors();
    }
    res.status(200).json(authors); // [] con las authors encontradas
}


// Post
const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {name,surname,id_author,email,image]}
    const response = await author.createAuthor(newAuthor);
    res.status(201).json({
        "items_created": response,
        data: newAuthor
    });
}

/* {
"name": "Prueba",
"surname": "Test",
"image": "https://randomuser.me/api/portraits/thumb/men/62.jpg",
"id_author": 10,
"email": "test@thebridgeschool.es"
} */


//DELETE
const deleteAuthor = async (req,res)=> {
    let authors;
    authors = await author.deleteAuthor(req.query.id_author);
    res.send('Autor borrado');
}



//UPDATE
const updateAuthor = async (req, res) => {
    const email = req.query.email
    const updatedAuthor = req.body; // {name,img}
    const response = await author.updateAuthor(updatedAuthor,email);
    res.status(201).json({
        "items_updated": response,
        data: updatedAuthor
    });
}

/* {
    "name":"alejandru",
    "image":"https://randomuser.me/api/portraits/thumb/men/70.jpg"
     } */


    module.exports = {
        getAuthors,
        createAuthor,
        deleteAuthor,
        updateAuthor,
    }