import express from 'express'
import multer from 'multer'
const router = express.Router()

import { mostrar, mostraru, crear, modificar, eliminar, cargar } from '../controllers/productosController.js'

const storage = multer.diskStorage({
    destination:'controllers/archivos/',
    filename:(req,file,cb)=>{
        cb("","productos.csv")
    }
})

const cargarArchivo = multer({
    storage: storage
})


//mapping mostrar todos los productos
router.get('/productos/', mostrar)

//mapping mostrar un solo productos
router.get('/productos/:codigo_productos', mostraru)

//mapping crear productos
router.post('/productos/', crear)

//mapping modificar productos
router.put('/productos/:codigo_productos', modificar)

//mapping eliminar productos
router.delete('/productos/:codigo_productos', eliminar)

//mapping cargar archivo productos
router.post('/productos/cargar/',cargarArchivo.single('archivo'), cargar)

export default router