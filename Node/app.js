import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './database/db.js'
import productosRoutes from './routes/productos.js'

dotenv.config({path: './env/.env'})

const app = express()

app.use(cors())
app.use(express.json())
app.use('/medellin/', productosRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

/*app.get('/medellin/', (req, res) =>{
   res.send('servidor conectado con exito')
})*/

app.listen(process.env.PORT, () => {
    console.log('Conectado con exito en http://localhost:' + process.env.PORT + '/medellin/')
})
