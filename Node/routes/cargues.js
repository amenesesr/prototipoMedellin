import express from 'express'
const router = express.Router()

import { mostrar, eliminar } from '../controllers/carguesController.js'

//mapping mostrar todos los productos
router.get('/cargues/', mostrar)

//mapping eliminar productos
router.delete('/cargues/', eliminar)

export default router