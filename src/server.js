const express = require('express')
const router = require('./routes')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev')) // mostrar información sobre la consulta ('dev') es el formato 

app.use(cors()) // mecanismo de seguridad implementado por los navegadores web para controlar las solicitudes HTTP 

app.use(express.json()) // me parsea a json el cuerpo de las solicitudes post 

app.use(router) // encausa la solucitud al router principal 

module.exports = app