import ProductosRechazadosModelo from '../modelos/ProductosRechazados.js'

export const mostrar = async (req, res) =>{
    console.log("=====================================")
    console.log(" METODO MOSTRAR PRODUCTOS RECHAZADOS ")
    console.log("=====================================")

    try {
        const productosRechazados = await ProductosRechazadosModelo.findAll()
        res.json(productosRechazados)
    } catch (error) {
        res.json( {message: error.message} )
    }  
}

export const eliminar = async (req, res) => {
    console.log("===========================================")
    console.log(" METODO LIMPIAR LISTA PRODUCTOS RECHAZADOS ")
    console.log("===========================================")

    try {
        await ProductosRechazadosModelo.destroy({ 
            where: {},
            truncate: true
        })
        res.json({
            "message":"Lista limpieada con exito"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }  
}