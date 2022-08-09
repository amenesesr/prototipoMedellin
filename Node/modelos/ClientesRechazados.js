import db from '../database/db.js'
import {DataTypes} from 'sequelize'

const ClientesRechazadosModelo = db.define('db_clientes_rechazados',{
    accion_clientes_rechazados: { type: DataTypes.STRING},
    cedula_clientesrids: { type: DataTypes.BIGINT},
    nombre_clientes_rechazados: { type: DataTypes.STRING},
    error_clientes_rechazados: { type: DataTypes.STRING}, 
    fecha_clientes_rechazados: { type: DataTypes.STRING}
})

export default ClientesRechazadosModelo