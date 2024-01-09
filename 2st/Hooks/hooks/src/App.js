import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [contador, setContador] = useState(0)
  //useEffect tiene como parámetro una función. Se ejecuta cada vez que hay un cambio en la página:
  useEffect(
    () => {
      document.title = "Hemos hecho click " + contador + " veces";
    }
  );

  return (
    <div className='App'>
      <h1>Hooks</h1>
      <p>Contador : <strong>{contador}</strong></p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>&nbsp;
      <button onClick={() => setContador(0)}>Poner a cero</button>
    </div>
  );
}

export default App;
