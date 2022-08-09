import express from 'express'
const router = express.Router()

import { mostrar, mostraru, crear, modificar, eliminar } from '../controllers/clientesController.js'

//mapping mostrar todos los clientes
router.get('/clientes/', mostrar)

//mapping mostrar un solo clientes
router.get('/clientes/:cedula_clientes', mostraru)

//mapping crear clientes
router.post('/clientes/', crear)

//mapping modificar clientes
router.put('/clientes/:cedula_clientes', modificar)

//mapping eliminar clientes
router.delete('/clientes/:cedula_clientes', eliminar)

export default router