import db from '../database/db.js'

import {DataTypes} from 'sequelize'

const ProductosRechazadosModelo = db.define('db_productos_rechazados',{
    accion_productos_rechazados: { type: DataTypes.STRING },
    codigo_productos_rechazados: { type: DataTypes.BIGINT },
    nombre_productos_rechazados: { type: DataTypes.STRING },
    nitproveedor_productos_rechazados: { type: DataTypes.BIGINT },
    error_productos_rechazados: { type: DataTypes.STRING },
    fecha_productos_rechazados: { type: DataTypes.STRING }
})

export default ProductosRechazadosModelo

