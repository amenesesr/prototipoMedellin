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
            where:{ cedula_usuarios: req.params.cedula_usuarios }
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
            "message":"┬íRegistro creado correctamente!"
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
            where: { cedula_usuarios: req.params.cedula_usuarios}
        })
        res.json({
            "message":"┬íRegistro actualizado correctamente!"
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
            where: { cedula_usuarios : req.params.cedula_usuarios }
        })
        res.json({
            "message":"┬íRegistro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

