import ProductosModelo from '../modelos/productos.js'

export const mostrar = async (req, res) =>{
    console.log("==========================")
    console.log(" METODO MOSTRAR PRODUCTOS ")
    console.log("==========================")

    try {
        const products = await ProductosModelo.findAll()
        res.json(products)
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

