import db from '../database/db.js'
import {DataTypes} from 'sequelize'

const RegistrosModelo = db.define('db_registros',{
    convencion_registros: { type: DataTypes.INTEGER },
    fechaHora_registros: { type: DataTypes.STRING },
    usuario_registros: { type: DataTypes.STRING },
    accion_registros: { type: DataTypes.STRING }
})

export default RegistrosModelo