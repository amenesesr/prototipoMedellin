import db from '../database/db.js'
import {DataTypes} from 'sequelize'

const NotificacionesModelo = db.define('db_notificaciones',{
    error_notificaciones: { type: DataTypes.INTEGER}
})
NotificacionesModelo.removeAttribute('id')

export default NotificacionesModelo