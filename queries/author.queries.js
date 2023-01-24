const authorQueries ={
    getAuthorByEmail:`
    SELECT a.name,a.surname,a.image, a.id_author, a.email
    FROM authors as a
    WHERE a.email=$1 `,
    getAllAuthors: `SELECT * FROM authors`,
    createAuthor:`INSERT INTO authors(name,surname,id_author,email,image)
    VALUES ($1,$2,$3,$4,$5)`,
    deleteAuthor:`DELETE 
    FROM authors 
    WHERE id_author =$1`,
    updateAuthor: `UPDATE authors
    SET name = $1, image = $2
    WHERE email = $3`,
        


}

module.exports = authorQueries