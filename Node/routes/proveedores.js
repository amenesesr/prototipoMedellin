import express from 'express'
const router = express.Router()

import { mostrar, mostraru, crear, modificar, eliminar } from '../controllers/proveedoresController.js'

//mapping mostrar todos los proveedores
router.get('/proveedores/', mostrar)

//mapping mostrar un solo proveedores
router.get('/proveedores/:nit_proveedores', mostraru)

//mapping crear proveedores
router.post('/proveedores/', crear)

//mapping modificar proveedores
router.put('/proveedores/:nit_proveedores', modificar)

//mapping eliminar proveedores
router.delete('/proveedores/:nit_proveedores', eliminar)

export default router