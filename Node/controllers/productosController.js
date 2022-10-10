import ProductosModelo from '../modelos/productos.js'
import ProveedoresModelo from '../modelos/proveedores.js'
import ProductosRechazadosModelo from '../modelos/ProductosRechazados.js'
import CarguesModelo from '../modelos/Cargues.js'
import RegistrosModelo from '../modelos/Registros.js'
import NotificacionesModelo from '../modelos/Notificaciones.js'
import path from 'path'
import {fileURLToPath} from 'url'
import csvtojson from 'csvtojson'

export const mostrar = async (req, res) =>{
    console.log("==========================")
    console.log(" METODO MOSTRAR PRODUCTOS ")
    console.log("==========================")

    try {
        const productos = await ProductosModelo.findAll()
        res.json(productos)
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

export const mostraru = async (req, res) =>{
    console.log("========================")
    console.log(" METODO BUSCAR PRODUCTO ")
    console.log("========================")

    try {
        const product = await ProductosModelo.findAll({
            where:{ codigo_productos: req.params.codigo_productos }
        })
        res.json(product[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

export const crear = async (req, res) => {
    console.log("========================")
    console.log(" METODO CREAR PRODUCTOS ")
    console.log("========================")

    try {
        await ProductosModelo.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }

}

export const modificar = async (req, res) => {
    console.log("============================")
    console.log(" METODO MODIFICAR PRODUCTOS ")
    console.log("============================")

    try {
        await ProductosModelo.update(req.body, {
            where: { codigo_productos: req.params.codigo_productos}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

export const eliminar = async (req, res) => {
    console.log("===========================")
    console.log(" METODO ELIMINAR PRODUCTOS ")
    console.log("===========================")

    try {
        await ProductosModelo.destroy({ 
            where: { codigo_productos : req.params.codigo_productos }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

export const cargar = async (req, res) =>{
    console.log("===================")
    console.log(" METODO CARGAR CSV ")
    console.log("===================")

    try {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = path.dirname(__filename); 
        const archivo = path.join (__dirname,"\\archivos\\productos.csv")

        console.log("archivo" + archivo)

        var usuario = 123
        var accion_registros = ""
        var usuario_registros = ""

        var error = 0
        var convencion_registros = 0
    
        var bandera_producto = 0
        var bandera_proveedor = 0
        
        var productosAceptados = []
        var productosRechazados = []
    
        var registros_totales = 0
        var registros_aceptados = 0
        var registros_rechazados = 0
    
        var fechaTemp = new Date()
        var fechaHoraRegistro = ""
        var fechaHora_registros = ""
        var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour:'numeric', minute: 'numeric', second:'numeric'}
        fechaHoraRegistro = fechaTemp.toLocaleDateString("es-CO",options)

        const productosExistentes = await ProductosModelo.findAll()

        const proveedoresExistentes = await ProveedoresModelo.findAll()

        csvtojson().fromFile(archivo).then(async source => {
    
            for (var i = 0; i < source.length; i++) 
            {
                var oneRow = {
                    codigo_productos: source[i]['codigo_productos'],
                    ivacompra_productos: source[i]['ivacompra_productos'],
                    nitproveedor_productos: source[i]['nitproveedor_productos'],
                    nombre_productos: source[i]['nombre_productos'],
                    precio_compra_productos: source[i]['precio_compra_productos'],
                    precio_venta_productos: source[i]['precio_venta_productos']
                }
                
                bandera_producto = 0
                productosExistentes.forEach( async (productoExistente)=>{
                    if(oneRow.codigo_productos == productoExistente.codigo_productos){
                        var productoRechazado = {
                            accion_productos_rechazados: "Cargue de productos por Archivo CSV",
                            codigo_productos_rechazados: oneRow.codigo_productos,
                            nombre_productos_rechazados: oneRow.nombre_productos,
                            nitproveedor_productos_rechazados: oneRow.nitproveedor_productos,
                            error_productos_rechazados: "Producto con codigo '" + oneRow.codigo_productos + "' ya existe en la base de datos",  
                            fecha_productos_rechazados: fechaHoraRegistro    
                        }
                        bandera_producto = 1
                        productosRechazados.push(productoRechazado);
                    }
                })
    
                bandera_proveedor = 0
                proveedoresExistentes.forEach(async (proveedoresExistente) => {
                    if (oneRow.nitproveedor_productos == proveedoresExistente.nit_proveedores )
                    {
                        bandera_proveedor = 1
                    }
                })
    
                if (bandera_proveedor == 0)
                {
                    var productoRechazado = {
                        accion_productos_rechazados: "Cargue de productos por Archivo CSV",
                        codigo_productos_rechazados: oneRow.codigo_productos,
                        nombre_productos_rechazados: oneRow.nombre_productos,
                        nitproveedor_productos_rechazados: oneRow.nitproveedor_productos,
                        error_productos_rechazados: "El proveedor con nit '"+ oneRow.nitproveedor_productos + "' no existe en la base de datos",
                        fecha_productos_rechazados: fechaHoraRegistro 
                    }
                    productosRechazados.push(productoRechazado)
                }
    
                if (bandera_producto == 0 && bandera_proveedor == 1)
                {
                    productosAceptados.push(oneRow)
                }
                registros_totales++
            } //aqui termina la verificacion de los datos del archivo CSV para empezar a grabar
            
            productosAceptados.forEach( async (productoAceptado)  =>  {
                await ProductosModelo.create(productoAceptado)
                registros_aceptados++
            })
         
            productosRechazados.forEach( async (productoRechazado)  =>  {
                await ProductosRechazadosModelo.create(productoRechazado)
                registros_rechazados++
            })
            
            await CarguesModelo.create({aceptados_cargues: registros_aceptados, 
                                        rechazados_cargues: registros_rechazados, 
                                        total_cargues: registros_totales})
        
            if (registros_rechazados == registros_totales)
            {
                convencion_registros = 3
                fechaHora_registros = fechaHoraRegistro
                usuario_registros = usuario
                accion_registros = "El usuario fallo en el intento de CARGAR UN ARCHIVO CSV en el modulo PRODUCTOS"
                error = 4
                await RegistrosModelo.create({convencion_registros, fechaHora_registros, usuario_registros, accion_registros})        
                await NotificacionesModelo.create({error_notificaciones: error})
                return res.json({message: "Se proceso el archivo con exito, todos los registros fueron rechazados"})

            }
    
            if (registros_aceptados == registros_totales)
            {
                convencion_registros = 2
                fechaHora_registros = fechaHoraRegistro
                usuario_registros = usuario
                accion_registros = "El usuario cargo con exito un archivo CSV en el modulo PRODUCTOS"
                error = 6
                await RegistrosModelo.create({convencion_registros, fechaHora_registros, usuario_registros, accion_registros})        
                await NotificacionesModelo.create({error_notificaciones: error})
                return res.json({message: "Se proceso el archivo con exito, todos los registros fueron aceptados"})
   
            }
    
            if (registros_aceptados != registros_totales)
            {
                convencion_registros = 3
                fechaHora_registros = fechaHoraRegistro
                usuario_registros = usuario
                accion_registros = "El usuario intento CARGAR UN ARCHIVO CSV en el modulo PRODUCTOS con algunos errores"
                error = 5
                await RegistrosModelo.create({convencion_registros, fechaHora_registros, usuario_registros, accion_registros})
                await NotificacionesModelo.create({error_notificaciones: error})
                return res.json({message: "Se proceso el archivo con exito, algunos registros fueron rechazados"})
            }
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

