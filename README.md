# API_SQL

### EJERCICIO - API REST con Express 

Creación de una dabse de datos en postgresql utilizando pgadmin 4 en la cual estaran varias entradas (entries) de un Blog y sus autores (authors).

No se podrá insertar entries repetidas por título.

 Rutas para las entradas:

- [GET] http://localhost:3000/api/entries
- [GET] http://localhost:3000/api/entries?email --> por email
- [POST] http://localhost:3000/api/entries/ crear entrada solo si existe el email del autor
- [PUT] http://localhost:3000/api/entries/ (parecido a POST) modifica una entry por completo con nuevos datos y retorna un status 200. Buscar por título para editar entry.
- [DELETE] http://localhost:3000/api/entries/ Borra una entry y retorna un status 200. Búsqueda por título de entry para borrar. Payload {message: "Se ha borrado la entry 'Título de noticia' "}

Rutas para autores:

- [GET] http://localhost:3000/api/authors Retorna un objeto con los datos de todos los autores. Retorna un status 200
- [GET] http://localhost:3000/api/authors?email=alejandru@thebridgeschool.es Retorna un objeto con los datos del autor buscado. Retorna un status 200
- [POST] http://localhost:3000/api/authors/ Se envía por POST los datos del autor a crear y retorna un status 201. Payload `{message: "usuario creado: guillermu@thebridgeschool.es"}`
- [PUT] http://localhost:3000/api/authors/ Actualiza los datos de un autor y retorna un status 200. Payload `{message: "usuario actualizado: guillermu@thebridgeschool.es"}`
- [DELETE] http://localhost:3000/api/authors/ Borra un autor y retorna un status 200. Búsqueda por email. Payload `{message: "Se ha borrado guillermu@thebridgeschool.es"}`


Instalamos Morgan para controlar las peticiones HTTP.
