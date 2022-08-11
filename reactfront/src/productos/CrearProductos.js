import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:5000/medellin/productos'

const CompCrearProductos = () => {
    const [codigo_productos, setCodigo_productos] = useState('')   
    const [nombre_productos, setNombre_productos] = useState('')   
    const [nitproveedor_productos, setNitproveedor_productos] = useState('')   
    const [ivacompra_productos, setIvacompra_productos] = useState('')   
    const [precio_compra_productos, setPrecio_compra_productos] = useState('')   
    const [precio_venta_productos, setPrecio_venta_productos] = useState('')
    const navigate = useNavigate() 
    
    const crear = async (e) =>{
        e.preventDefault()
        await axios.post(URI, {
            codigo_productos: codigo_productos,
            nombre_productos: nombre_productos,
            nitproveedor_productos: nitproveedor_productos,
            ivacompra_productos: ivacompra_productos,
            precio_compra_productos: precio_compra_productos,
            precio_venta_productos: precio_venta_productos
        })
        navigate('/')
    }

    return(
        <div className="card-body">
            <form onSubmit={crear}>
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="bmd-label-floating">Codigo del Producto</label>
                    <input
                        value={codigo_productos}
                        onChange={ (e)=> setCodigo_productos(e.target.value)} 
                        type="number"
                        className='form-control'
                        required
                    />
                  </div>
                </div>
                <div className="col-md-3">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <div className="col-md-4">
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
                <button type="submit" className="btn btn-success pull-right">Crear Producto</button>
              </div>
            </form>
        </div>
    )
}

export default CompCrearProductos