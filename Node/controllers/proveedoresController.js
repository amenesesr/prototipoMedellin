import ProveedoresModelo from '../modelos/proveedores.js'

export const mostrar = async (req, res) =>{
    console.log("============================")
    console.log(" METODO MOSTRAR PROVEEDORES ")
    console.log("============================")

    try {
        const proveedores = await ProveedoresModelo.findAll()
        res.json(proveedores)
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

export const mostraru = async (req, res) =>{
    console.log("===========================")
    console.log(" METODO BUSCAR PROVEEDORES ")
    console.log("===========================")

    try {
        const proveedores = await ProveedoresModelo.findAll({
            where:{ nit_proveedores: req.params.nit_proveedores }
        })
        res.json(proveedores[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

export const crear = async (req, res) => {
    console.log("==========================")
    console.log(" METODO CREAR PROVEEDORES ")
    console.log("==========================")

    try {
        await ProveedoresModelo.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
     } catch (error) {
         res.json( {message: error.message} )
     }

}

export const modificar = async (req, res) => {
    console.log("==============================")
    console.log(" METODO MODIFICAR PROVEEDORES ")
    console.log("==============================")

    try {
        await ProveedoresModelo.update(req.body, {
            where: { nit_proveedores: req.params.nit_proveedores}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

export const eliminar = async (req, res) => {
    console.log("=============================")
    console.log(" METODO ELIMINAR PROVEEDORES ")
    console.log("=============================")

    try {
        await ProveedoresModelo.destroy({ 
            where: { nit_proveedores : req.params.nit_proveedores }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

