import CarguesModelo from '../modelos/cargues.js'

export const mostrar = async (req, res) =>{
    console.log("========================")
    console.log(" METODO MOSTRAR CARGUES ")
    console.log("========================")

    try {
        const cargues= await CarguesModelo.findAll()
        res.json(cargues)
    } catch (error) {
        res.json( {message: error.message} )
    }  
}

export const eliminar = async (req, res) => {
    console.log("========================")
    console.log(" METODO LIMPIAR CARGUES ")
    console.log("========================")

    try {
        await CarguesModelo.destroy({ 
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