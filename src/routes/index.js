const { Router } = require('express')
const moviesRouter = require('./moviesRouter')

const router = Router()

router.use("/movies", moviesRouter) // si en endpoint en la solicitud es "/movies" me encausa la solicitud a un router especializado 

module.exports = router