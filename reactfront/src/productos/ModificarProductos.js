import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const URI = 'http://localhost:5000/medellin/productos/'

const CompModificarProductos = () => {
    const [nombre_productos, setNombre_productos] = useState('')   
    const [nitproveedor_productos, setNitproveedor_productos] = useState('')   
    const [ivacompra_productos, setIvacompra_productos] = useState('')   
    const [precio_compra_productos, setPrecio_compra_productos] = useState('')   
    const [precio_venta_productos, setPrecio_venta_productos] = useState('')
    const navigate = useNavigate()
    const {codigo_productos} = useParams()

    const modificarProductos = async (e) =>{
        e.preventDefault()
        await axios.put(URI+codigo_productos, {
            nombre_productos: nombre_productos,
            nitproveedor_productos: nitproveedor_productos,
            ivacompra_productos: ivacompra_productos,
            precio_compra_productos: precio_compra_productos,
            precio_venta_productos: precio_venta_productos
        })
        navigate('/')
    }

    useEffect(() =>{
        mostrarProductoPorCodigo()
    },[])

    const mostrarProductoPorCodigo = async () => {
        const res = await axios.get(URI+codigo_productos)
        setNombre_productos(res.data.nombre_productos)
        setNitproveedor_productos(res.data.nitproveedor_productos)
        setPrecio_compra_productos(res.data.precio_compra_productos)
        setIvacompra_productos(res.data.ivacompra_productos)
        setPrecio_venta_productos(res.data.precio_venta_productos)
    }

    return (
      <div>
        <h3>Modificar Producto</h3>
        <form onSubmit={modificarProductos}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label className="bmd-label-floating">Nombre del Producto</label>
                <input
                  value={nombre_productos}
                  onChange={ (e)=> setNombre_productos(e.target.value)} 
                  type="text"
                  className='form-control'
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label className="bmd-label-floating">NIT del Proveedor</label>
                <input
                  value={nitproveedor_productos}
                  onChange={ (e)=> setNitproveedor_productos(e.target.value)} 
                  type="number"
                  className='form-control'
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="form-group">
                <label className="bmd-label-floating">Precio de compra del Producto</label>
                <input
                  value={precio_compra_productos}
                  onChange={ (e)=> setPrecio_compra_productos(e.target.value)} 
                  type="number"
                  className='form-control'
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label className="bmd-label-floating">IVA</label>
                <input
                  value={ivacompra_productos}
                  onChange={ (e)=> setIvacompra_productos(e.target.value)} 
                  type="number"
                  className='form-control'
                  required
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-group">
                <label className="bmd-label-floating">Precio de venta del producto</label>
                <input
                  value={precio_venta_productos}
                  onChange={ (e)=> setPrecio_venta_productos(e.target.value)} 
                  type="number"
                  className='form-control'
                  required
                />
              </div>
            </div>
          </div> 
          <div className="col-md-12">
            <br></br>
            <button type="submit" className="btn btn-primary">Modificar</button>
          </div>
        </form>
      </div>
    )

}

export default CompModificarProductos