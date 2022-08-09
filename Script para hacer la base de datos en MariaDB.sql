-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.6.5-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para ciclo4a_medellin
CREATE DATABASE IF NOT EXISTS `ciclo4a_medellin` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `ciclo4a_medellin`;

-- Volcando estructura para tabla ciclo4a_medellin.db_cargues
CREATE TABLE IF NOT EXISTS `db_cargues` (
  `aceptados_cargues` int(10) unsigned DEFAULT NULL,
  `rechazados_cargues` int(10) unsigned DEFAULT NULL,
  `total_cargues` int(10) unsigned DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_clientes
CREATE TABLE IF NOT EXISTS `db_clientes` (
  `cedula_clientes` bigint(20) NOT NULL,
  `direccion_clientes` varchar(50) NOT NULL,
  `email_clientes` varchar(50) NOT NULL,
  `nombre_clientes` varchar(50) NOT NULL,
  `telefono_clientes` bigint(20) NOT NULL,
  PRIMARY KEY (`cedula_clientes`) USING BTREE,
  UNIQUE KEY `_id` (`cedula_clientes`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_clientes_rechazados
CREATE TABLE IF NOT EXISTS `db_clientes_rechazados` (
  `cedula_clientes_rechazados` bigint(20) NOT NULL,
  `nombre_clientes_rechazados` varchar(50) NOT NULL,
  `error_clientes_rechazados` varchar(100) NOT NULL,
  `fecha_clientes_rechazados` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_detalle_ventas
CREATE TABLE IF NOT EXISTS `db_detalle_ventas` (
  `codigo_detalle_ventas` bigint(20) NOT NULL AUTO_INCREMENT,
  `ID_detalle_ventas` int(20) DEFAULT NULL,
  `codigo_venta_detalle_ventas` bigint(20) NOT NULL,
  `codigo_producto_detalle_ventas` bigint(20) NOT NULL,
  `cantidad_producto_detalle_ventas` int(11) NOT NULL,
  `valor_venta_detalle_ventas` double NOT NULL,
  `valoriva_detalle_ventas` double NOT NULL,
  `valor_total_detalle_ventas` double NOT NULL,
  PRIMARY KEY (`codigo_detalle_ventas`),
  UNIQUE KEY `codigo_detalle_ventas` (`codigo_detalle_ventas`),
  KEY `codigo_producto_detalle_ventas` (`codigo_producto_detalle_ventas`),
  KEY `codigo_venta_detalle_ventas` (`codigo_venta_detalle_ventas`),
  CONSTRAINT `codigo_producto_detalle_ventas` FOREIGN KEY (`codigo_producto_detalle_ventas`) REFERENCES `db_productos` (`codigo_productos`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_notificaciones
CREATE TABLE IF NOT EXISTS `db_notificaciones` (
  `error_notificaciones` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_productos
CREATE TABLE IF NOT EXISTS `db_productos` (
  `codigo_productos` bigint(20) NOT NULL,
  `nombre_productos` varchar(50) NOT NULL,
  `nitproveedor_productos` bigint(20) NOT NULL,
  `precio_compra_productos` int(11) NOT NULL,
  `ivacompra_productos` double NOT NULL,
  `precio_venta_productos` int(11) NOT NULL,
  PRIMARY KEY (`codigo_productos`) USING BTREE,
  UNIQUE KEY `_id` (`codigo_productos`) USING BTREE,
  KEY `Proveedores` (`nitproveedor_productos`),
  CONSTRAINT `Proveedores` FOREIGN KEY (`nitproveedor_productos`) REFERENCES `db_proveedores` (`nit_proveedores`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_productos_rechazados
CREATE TABLE IF NOT EXISTS `db_productos_rechazados` (
  `codigo_productos_rechazados` bigint(20) NOT NULL,
  `nombre_productos_rechazados` varchar(50) NOT NULL,
  `nitproveedor_productos_rechazados` bigint(20) NOT NULL,
  `error_productos_rechazados` varchar(100) NOT NULL,
  `fecha_productos_rechazados` varchar(50) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_proveedores
CREATE TABLE IF NOT EXISTS `db_proveedores` (
  `nit_proveedores` bigint(20) NOT NULL,
  `nombre_proveedores` varchar(50) NOT NULL,
  `ciudad_proveedores` varchar(50) NOT NULL,
  `direccion_proveedores` varchar(50) NOT NULL,
  `telefono_proveedores` varchar(50) NOT NULL,
  PRIMARY KEY (`nit_proveedores`) USING BTREE,
  UNIQUE KEY `_id` (`nit_proveedores`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_proveedores_rechazados
CREATE TABLE IF NOT EXISTS `db_proveedores_rechazados` (
  `nitproveedor_proveedores_rechazados` bigint(20) NOT NULL,
  `nombre_proveedores_rechazados` varchar(50) NOT NULL,
  `error_proveedores_rechazados` varchar(100) NOT NULL,
  `fecha_proveedores_rechazados` varchar(50) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 ROW_FORMAT=DYNAMIC;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_registros
CREATE TABLE IF NOT EXISTS `db_registros` (
  `convencion_registros` int(1) DEFAULT NULL,
  `fechaHora_registros` varchar(50) DEFAULT NULL,
  `usuario_registros` varchar(50) DEFAULT NULL,
  `accion_registros` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_usuarios
CREATE TABLE IF NOT EXISTS `db_usuarios` (
  `cedula_usuarios` bigint(20) NOT NULL DEFAULT 0 COMMENT 'este valor es la cedula lo dejo como _id porque en MongoDB me toco dejarlo asi',
  `nombre_usuarios` varchar(50) NOT NULL DEFAULT '',
  `email_usuarios` varchar(50) NOT NULL DEFAULT '',
  `usuario_usuarios` varchar(50) NOT NULL DEFAULT '',
  `password_usuarios` varchar(200) NOT NULL DEFAULT '',
  PRIMARY KEY (`cedula_usuarios`) USING BTREE,
  UNIQUE KEY `_id` (`cedula_usuarios`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COMMENT='tabla que contiene los usuarios para ingresar al aplicativo';

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_usuarios_rechazados
CREATE TABLE IF NOT EXISTS `db_usuarios_rechazados` (
  `cedula_usuarios_rechazados` bigint(20) NOT NULL,
  `nombre_usuarios_rechazados` varchar(50) NOT NULL,
  `usuario_usuarios_rechazados` varchar(50) NOT NULL,
  `error_usuarios_rechazados` varchar(100) NOT NULL,
  `fecha_usuarios_rechazados` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_ventas
CREATE TABLE IF NOT EXISTS `db_ventas` (
  `codigo_venta_ventas` bigint(20) NOT NULL AUTO_INCREMENT,
  `cedula_cliente_ventas` bigint(20) NOT NULL,
  `cedula_usuario_ventas` bigint(20) NOT NULL,
  `valor_venta_ventas` double NOT NULL,
  `ivaventas_ventas` double NOT NULL,
  `total_venta_ventas` double NOT NULL,
  `fechahora_ventas` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`codigo_venta_ventas`),
  UNIQUE KEY `codigo_venta_ventas` (`codigo_venta_ventas`),
  KEY `cedula_usuario` (`cedula_usuario_ventas`),
  KEY `cedula_cliente` (`cedula_cliente_ventas`),
  CONSTRAINT `cedula_cliente` FOREIGN KEY (`cedula_cliente_ventas`) REFERENCES `db_clientes` (`cedula_clientes`) ON UPDATE CASCADE,
  CONSTRAINT `cedula_usuario` FOREIGN KEY (`cedula_usuario_ventas`) REFERENCES `db_usuarios` (`cedula_usuarios`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla ciclo4a_medellin.db_ventas_temp
CREATE TABLE IF NOT EXISTS `db_ventas_temp` (
  `ID_temp` int(11) DEFAULT NULL,
  `codigo_producto_temp` bigint(20) NOT NULL DEFAULT 0,
  `nombre_producto_temp` varchar(50) NOT NULL DEFAULT '',
  `cantidad_producto_temp` int(11) NOT NULL,
  `valor_producto_temp` int(11) NOT NULL,
  `parcial_producto_temp` double NOT NULL DEFAULT 0,
  `iva_producto_temp` double NOT NULL DEFAULT 0,
  `total_temp` double NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
