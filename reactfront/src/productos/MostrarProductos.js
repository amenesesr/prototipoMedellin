import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:5000/medellin/productos/'

const CompMostrarProductos = () => {
    const [productos, setProductos] = useState([])
    useEffect( () => {
        getProductos()
    },[])

    //mostrar todos los productos
    const getProductos = async () => {
        const res = await axios.get(URI)
        setProductos(res.data)
        console.log(productos)
    }

    //eliminar producto
    const eliminarProducto = async (codigo_productos) => {
        await axios.delete(`${URI}${codigo_productos}`)
        getProductos()
    }

    return(
        <div className='container'>
            <Link to="/crearProductos" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i></Link>
            <Link to="/subirProductos/" className='btn btn-info' tooltip= "aaa"><i class="fa-solid fa-file-arrow-up"></i></Link> 
            <div className='row'>
                <div className='col'>
                    <table className="table table-dark table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>
                                    Codigo Del Producto
                                </th>
                                <th>
                                    Nombre Del Producto
                                </th>
                                <th>
                                    Proveedor Del Producto
                                </th>
                                <th>
                                    Precio Compra Del Producto
                                </th>
                                <th>
                                    Iva Del Producto
                                </th>
                                <th>
                                    Precio Venta Del Producto
                                </th>
                                <th>
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        { productos.map ( (producto) => (
                                <tr key={ producto.codigo_productos}>
                                    <td> { producto.codigo_productos } </td>
                                    <td> { producto.nombre_productos } </td>
                                    <td> { producto.nitproveedor_productos } </td>
                                    <td> { producto.ivacompra_productos } </td>
                                    <td> { producto.precio_compra_productos } </td>
                                    <td> { producto.precio_venta_productos } </td>
                                    <td>
                                        <Link to={`/modificarProductos/${producto.codigo_productos}`} className='btn btn-info'><i className="fas fa-edit"></i></Link> 
                                        <button onClick={ () => eliminarProducto (producto.codigo_productos) } className='btn btn-danger'><i className="fas fa-trash-alt"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>  
    )

}

export default CompMostrarProductos