import db from '../database/db.js'
import {DataTypes} from 'sequelize'

const ProveedoresRechazadosModelo = db.define('db_proveedores_rechazados',{
    accion_proveedores_rechazados: { type: DataTypes.STRING },
    nitproveedor_proveedores_rechazados: { type: DataTypes.BIGINT },
    nombre_proveedores_rechazados: { type: DataTypes.STRING },
    error_proveedores_rechazados: { type: DataTypes.STRING }, 
    fecha_proveedores_rechazados: { type: DataTypes.STRING }
})

export default ProveedoresRechazadosModelo