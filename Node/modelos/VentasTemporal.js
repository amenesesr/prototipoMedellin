import db from '../database/db.js'
import {DataTypes} from 'sequelize'

const VentasTemporalesModelo = db.define('db_ventas_temp',{
    ID_temp: { type: DataTypes.INTEGER , primaryKey: true},
    codigo_producto_temp: { type: DataTypes.BIGINT },
    nombre_producto_temp: { type: DataTypes.STRING },
    cantidad_producto_temp: { type: DataTypes.INTEGER },
    valor_producto_temp: { type: DataTypes.INTEGER },
    parcial_producto_temp: { type: DataTypes.DOUBLE },
    iva_producto_temp: { type: DataTypes.DOUBLE },
    total_temp: { type: DataTypes.DOUBLE }
})

export default VentasTemporalesModelo