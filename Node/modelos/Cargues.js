import db from '../database/db.js'
import {DataTypes} from 'sequelize'

const CarguesModelo = db.define('db_cargues',{
    aceptados_cargues: { type: DataTypes.INTEGER},
    rechazados_cargues: { type: DataTypes.INTEGER},
    total_cargues: { type: DataTypes.INTEGER}
})
CarguesModelo.removeAttribute('id');

export default CarguesModelo