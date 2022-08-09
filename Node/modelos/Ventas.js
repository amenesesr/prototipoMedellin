import db from '../database/db.js'
import {DataTypes} from 'sequelize'

const VentasModelo = db.define('db_ventas',{
    codigo_venta_ventas: { type: DataTypes.BIGINT, primaryKey: true },
    cedula_cliente_ventas: { type: DataTypes.BIGINT },
    cedula_usuario_ventas: { type: DataTypes.BIGINT },
    valor_venta_ventas: { type: DataTypes.DOUBLE },
    ivaventas_ventas: { type: DataTypes.DOUBLE },
    total_venta_ventas: { type: DataTypes.DOUBLE },
    fechahora_ventas: { type: DataTypes.STRING }
})

export default VentasModelo