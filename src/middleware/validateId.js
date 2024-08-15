const mongoose = require('mongoose')

// Esta función es solo de practica ya que en mi aplicación no recibo ningun id por parametro, pero suponiendo que lo hiciera:

const validateId = (req, res, next) => {
     const { id } = req.params

    if (mongoose.Types.ObjectId.isValid(id)) {
        next()
    } else {
        next({ message: 'Id invalido', statusCode: 400 })
    }
}

// validateId deberia ser requirida en el modulo donde se encuentra el enpoint que trae un usuario por id y tendría que ejecutarse antes 
// de que la solicitud llegue a su destino, es decir a su controlador, entonces así, si el id es invalido, la solicitud pasaría a manos 
// del manejador de errores que definimos despues de todo middleware y toda ruta en nuestro archivo server.js 

// de esta forma tomamos el control del manejo de errores de toda la aplicación 