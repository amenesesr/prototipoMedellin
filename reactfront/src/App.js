import logo from './logo.svg';
import './App.css';

//importar los componentes
import CompMostrarProductos from './productos/MostrarProductos'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompMostrarProductos></CompMostrarProductos>
    </div>
  );
}

export default App;
