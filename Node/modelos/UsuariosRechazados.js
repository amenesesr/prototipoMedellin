import db from '../database/db.js'
import {DataTypes} from 'sequelize'

const UsuariosRechazadosModelo = db.define('db_usuarios_rechazados',{
    accion_usuarios_rechazados: { type: DataTypes.STRING },
    cedula_usuarios_rechazados: { type: DataTypes.BIGINT },
    nombre_usuarios_rechazados: { type: DataTypes.STRING },
    usuario_usuarios_rechazados: { type: DataTypes.STRING },
    error_usuarios_rechazados: { type: DataTypes.STRING }, 
    fecha_usuarios_rechazados: { type: DataTypes.STRING }
})

export default UsuariosRechazadosModelo