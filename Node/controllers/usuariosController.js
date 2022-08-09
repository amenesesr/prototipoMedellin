import UsuariosModelo from '../modelos/usuarios.js'

export const mostrar = async (req, res) =>{
    console.log("=========================")
    console.log(" METODO MOSTRAR USUARIOS ")
    console.log("=========================")

    try {
        const products = await UsuariosModelo.findAll()
        res.json(products)
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

export const mostraru = async (req, res) =>{
    console.log("========================")
    console.log(" METODO BUSCAR USUARIOS ")
    console.log("========================")

    try {
        const product = await UsuariosModelo.findAll({
            where:{ codigo_productos: req.params.codigo_productos }
        })
        res.json(product[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

export const crear = async (req, res) => {
    console.log("=======================")
    console.log(" METODO CREAR USUARIOS ")
    console.log("=======================")

    try {
        await UsuariosModelo.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
     } catch (error) {
         res.json( {message: error.message} )
     }

}

export const modificar = async (req, res) => {
    console.log("===========================")
    console.log(" METODO MODIFICAR USUARIOS ")
    console.log("===========================")

    try {
        await UsuariosModelo.update(req.body, {
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
    console.log("==========================")
    console.log(" METODO ELIMINAR USUARIOS ")
    console.log("==========================")

    try {
        await UsuariosModelo.destroy({ 
            where: { codigo_productos : req.params.codigo_productos }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

