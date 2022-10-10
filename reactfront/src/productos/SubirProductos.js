import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Alert from 'react-bootstrap/Alert'

const URI = 'http://localhost:5000/medellin/productos/cargar/'
const URI2 = 'http://localhost:5000/medellin/productosRechazados/'
const URI3 = 'http://localhost:5000/medellin/cargues/'

const CompSubirProductos = () => {
  
  const [archivo, setArchivo] = useState(null)
  
  const subirArchivo= e =>{
    setArchivo(e)
  }

  const cargarArchivo = async () => {
    const f = new FormData()
    for (let index = 0; index < archivo.length; index++) {
      f.append("archivo", archivo[index])
    }

    await axios.post(URI, f)
    .then(response=>{
      console.log(response.data)
    }).catch(error =>{
      console.log(error)
    })

  }

  //mostrar los rechazados
  const [productosRechazados, setProductosRechazados] = useState([])
  const navigate = useNavigate()

  //volver a productos
  const volver = async () => {
    navigate('/')
  }
  
  useEffect( () => {
    getProductosRechazados()
  },[])

  const getProductosRechazados = async () => {
    const res = await axios.get(URI2)
    setProductosRechazados(res.data)
  }

  //limpiar lista
  const eliminarProducto = async (codigo_productos) => {
    await axios.delete(URI2)
    getProductosRechazados()
    navigate('/subirProductos/')
  }

  const notificacion = () =>{
    if(archivo != null){
      return (
          <Alert variant="success"style={{ width: '40rem' }}>
          <Alert.Heading>El archivo se ha subido con exito.</Alert.Heading>
          <p>
            Archivo procesado con exito por favor revisar la tabla adjunta
          </p>
        </Alert>
      )
    }
  }

  //mostrar tabla de rechazados
  const mostrarTabla = () =>{
    const lista = productosRechazados.length
    if (lista != 0) {
      return(
        <div className='row'>
        <div className='col'>
          <table className="table table-dark table-striped">
            <thead className="table-dark">
              <tr>
                <th>
                  Accion Realizada
                </th>
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
                  Error Presentado
                </th>
                <th>
                  Fecha / Hora
                </th>
              </tr>
            </thead>
            <tbody>
              { productosRechazados.map ( (productoRechazado) => (
                <tr>
                  <td> { productoRechazado.accion_productos_rechazados } </td>
                  <td> { productoRechazado.codigo_productos_rechazados } </td>
                  <td> { productoRechazado.nombre_productos_rechazados } </td>
                  <td> { productoRechazado.nitproveedor_productos_rechazados } </td>
                  <td> { productoRechazado.error_productos_rechazados } </td>
                  <td> { productoRechazado.fecha_productos_rechazados } </td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
      </div>
      )
    }
    else
    {
      return (
        <div><b>NO SE HA PROCESADO NINGUN ARCHIVO</b></div>
      )
    }
  }

  useEffect( () => {
    getProductosRechazados()
  },[])
  
  return(
    <div align= "center" className="container-fluid">
      <br/>
       
      <Card border="dark" style={{ width: '36rem' }}>
        <form>
          <Card.Body>
            <Card.Header>
              <b><h4>Ingresar productos con un archivo CSV</h4></b>
            </Card.Header>
            <Card.Text>
              Seleccione un archivo CSV para crear los productos
              <input 
                type="file"
                name = "archivo"
                accept=".csv"
                className="form-control-lg" 
                multiple
                onChange={(e)=>subirArchivo(e.target.files)}
                required
              /> 
            </Card.Text>
            <Button variant="primary" type="submit" onClick={()=>cargarArchivo()}><i class="fa-solid fa-cloud-arrow-up"></i></Button>
          </Card.Body>
        </form>
        <Card.Footer>
          <Button variant="danger" type="submit" onClick={()=>eliminarProducto()}><i className="fas fa-trash-alt"></i></Button> 
          <Button variant="success" type="submit" onClick={()=>volver()}><i class="fa-solid fa-backward"></i></Button>
        </Card.Footer>
      </Card>
      <br/>
      {notificacion()}
      <br/>
      {mostrarTabla()}
      

    </div>
  )
}

export default CompSubirProductos