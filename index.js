const app = require('./src/server')
const dbCon = require('./src/config/dbCon')

dbCon().then(
    res => {
        app.listen(process.env.PORT || 3000, () =>{
            console.log("Servidor escuchando en el puerto 5000")
        })
    }
).catch(
    err => {
        console.log('Error al conectarse a la base de datos', err);
    }
)

