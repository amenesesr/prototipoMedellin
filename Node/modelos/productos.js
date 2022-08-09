import db from '../database/db.js'

import {DataTypes} from 'sequelize'

const ProductosModelo = db.define('db_productos',{
    codigo_productos: { type: DataTypes.BIGINT, primaryKey: true },
    nombre_productos: { type: DataTypes.STRING },
    nitproveedor_productos: { type: DataTypes.BIGINT },
    ivacompra_productos: { type: DataTypes.DOUBLE },
    precio_compra_productos: { type: DataTypes.INTEGER },
    precio_venta_productos: { type: DataTypes.INTEGER }
})

export default ProductosModelo