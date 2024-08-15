const Movies = require('../types/class')
const Movie = require('../models/Movie')

module.exports = {
    getAllMovies: async () => {
        try {
            const data = await Movie.find().exec()

            const movies = data.map(movie => new Movies(movie))
            
            return movies;
        } catch (error) {
            // Manejar cualquier error
            console.error('Hubo un problema con la operación:', error);
            throw error;
        }
    },
    createMovie: async (movie) => {
        try {
            const newMovie = await Movie.create(movie)
            return newMovie
        } catch (error) {
            console.error('Hubo un problema con la operación:', error);
            throw error;
        }
    }
}