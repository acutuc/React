import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Deseos from './components/Deseos';
import Deseo from './components/Deseo';

const App = () => {
  const [deseos, setDeseos] = useState(["jamón", "lechuga", "una tablet"])
  
  return (
    <div className='App'>
      <h1>Lista de deseos</h1>
      <h4>Añade tu regalo favorito</h4>
      <Deseos
      deseos={deseos}
      />
      <Deseo
      deseos={deseos}
      setDeseos={setDeseos}
      />
    </div>
  );
}

export default App;
