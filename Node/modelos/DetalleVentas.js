import db from '../database/db.js'
import {DataTypes} from 'sequelize'

const DetalleVentasModelo = db.define('db_detalle_ventas',{
    codigo_detalle_ventas: { type: DataTypes.BIGINT, primaryKey: true },
    ID_detalle_ventas : { type: DataTypes.INTEGER},
    codigo_venta_detalle_ventas: { type: DataTypes.BIGINT },
    codigo_producto_detalle_ventas: { type: DataTypes.BIGINT },
    cantidad_producto_detalle_ventas: { type: DataTypes.INTEGER },
    valor_venta_detalle_ventas: { type: DataTypes.DOUBLE },
    valoriva_detalle_ventas: { type: DataTypes.DOUBLE },
    valor_total_detalle_ventas: { type: DataTypes.DOUBLE }  
})

export default DetalleVentasModelo