const movieService = require("../services/movieService")

module.exports = {
    getAllMovies: async (req, res) => {
        try {
            const data = await movieService.getAllMovies()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    },
    createMovie: async (req, res) => {
        try {
            const { title, year, director, duration, genre, rate, poster } = req.body
            const data = await movieService.createMovie({ title, year, director, duration, genre, rate, poster })
            res.status(201).json(data)
        } catch (error) {
            res.status(500).json({
                error: "Error interno del servidor"
            })
        }
    }
}