import db from '../database/db.js'

import {DataTypes} from 'sequelize'

const ProveedoresModelo = db.define('db_proveedores',{
    nit_proveedores: { type: DataTypes.BIGINT, primaryKey: true },
    nombre_proveedores: { type: DataTypes.STRING },
    ciudad_proveedores: { type: DataTypes.STRING },
    direccion_proveedores: { type: DataTypes.STRING },
    telefono_proveedores: { type: DataTypes.BIGINT }
})

export default ProveedoresModelo

