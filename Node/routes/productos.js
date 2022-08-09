import express from 'express'
const router = express.Router()

import { mostrar, mostraru, crear, modificar, eliminar } from '../controllers/productosController.js'

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

export default router