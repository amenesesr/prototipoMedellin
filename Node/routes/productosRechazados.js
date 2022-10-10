import express from 'express'
const router = express.Router()

import { mostrar, eliminar } from '../controllers/productosRechazadosController.js'

//mapping mostrar todos los productos
router.get('/productosRechazados/', mostrar)

//mapping eliminar productos
router.delete('/productosRechazados/', eliminar)

export default router