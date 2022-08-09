import express from 'express'
const router = express.Router()

import { mostrar, mostraru, crear, modificar, eliminar } from '../controllers/usuariosController.js'

//mapping mostrar todos los usuarios
router.get('/usuarios/', mostrar)

//mapping mostrar un solo usuarios
router.get('/usuarios/:cedula_usuarios', mostraru)

//mapping crear usuarios
router.post('/usuarios/', crear)

//mapping modificar usuarios
router.put('/usuarios/:cedula_usuarios', modificar)

//mapping eliminar usuarios
router.delete('/usuarios/:cedula_usuarios', eliminar)

export default router