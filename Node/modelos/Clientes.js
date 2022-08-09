import db from '../database/db.js'

import {DataTypes} from 'sequelize'

const ClientesModelo = db.define('db_clientes',{
    cedula_clientes: { type: DataTypes.BIGINT, primaryKey: true },
    nombre_clientes: { type: DataTypes.STRING},
    telefono_clientes: { type: DataTypes.BIGINT},
    direccion_clientes: { type: DataTypes.STRING},
    email_clientes: { type: DataTypes.STRING},
    
})

export default ClientesModelo

