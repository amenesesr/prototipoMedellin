import ClientesModelo from '../modelos/clientes.js'

export const mostrar = async (req, res) =>{
    console.log("=========================")
    console.log(" METODO MOSTRAR CLIENTES ")
    console.log("=========================")

    try {
        const products = await ClientesModelo.findAll()
        res.json(products)
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

export const mostraru = async (req, res) =>{
    console.log("========================")
    console.log(" METODO BUSCAR CLIENTES ")
    console.log("========================")

    try {
        const product = await ClientesModelo.findAll({
            where:{ cedula_clientes: req.params.cedula_clientes }
        })
        res.json(product[0])
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

export const crear = async (req, res) => {
    console.log("=======================")
    console.log(" METODO CREAR CLIENTES ")
    console.log("=======================")

    try {
        await ClientesModelo.create(req.body)
        res.json({
            "message":"¡Registro creado correctamente!"
        })
     } catch (error) {
         res.json( {message: error.message} )
     }

}

export const modificar = async (req, res) => {
    console.log("===========================")
    console.log(" METODO MODIFICAR CLIENTES ")
    console.log("===========================")

    try {
        await ClientesModelo.update(req.body, {
            where: { cedula_clientes: req.params.cedula_clientes}
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
    console.log(" METODO ELIMINAR CLIENTES ")
    console.log("==========================")

    try {
        await ClientesModelo.destroy({ 
            where: { cedula_clientes : req.params.cedula_clientes }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
   
}

