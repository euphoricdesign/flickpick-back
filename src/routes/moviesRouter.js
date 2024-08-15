const { Router } = require('express')
const moviesController = require('../controllers/moviesController')

const moviesRouter = Router()

moviesRouter.get("/", moviesController.getAllMovies) // acá ya sabemos que estamos en el endpoint "/movies", no es necesario volver a indicarlo, por lo que directamente encausamos la solucitud finalmente a su funcion contraladora
moviesRouter.post("/", moviesController.createMovie)

module.exports = moviesRouter