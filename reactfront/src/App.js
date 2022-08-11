import logo from './logo.svg';
import './App.css';

//importar los componentes
import CompMostrarProductos from './productos/MostrarProductos'
import CompCrearProductos from './productos/CrearProductos'
import CompModificarProductos from './productos/ModificarProductos'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<CompMostrarProductos /> } />
          <Route path='/crearProductos' element={ <CompCrearProductos />} />
          <Route path='/modificarProducots/:codigo_productos' element={ <CompModificarProductos />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
