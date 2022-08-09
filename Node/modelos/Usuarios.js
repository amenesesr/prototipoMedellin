import db from '../database/db.js'
import {DataTypes} from 'sequelize'

const UsuariosModelo = db.define('db_usuarios',{
    cedula_usuarios: { type: DataTypes.BIGINT, primaryKey: true },
    nombre_usuarios: { type: DataTypes.STRING },
    email_usuarios: { type: DataTypes.STRING },
    usuario_usuarios: { type: DataTypes.STRING },
    password_usuarios: { type: DataTypes.STRING } 
})

export default UsuariosModelo