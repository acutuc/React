import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LOCALIDADES } from './components/Localidades';
import { Input } from 'reactstrap';
import { useState } from 'react';

const App = () => {
  const [localidades, setLocalidades] = useState([]);

  const handleChange = (event) => {
    if (event.target.name === 'localidad') {
      const texto = event.target.value.toLowerCase();
      const filtrado = LOCALIDADES.map((e) => e.label).filter((e) => e.toLowerCase().startsWith(texto));
      setLocalidades(filtrado);
      console.log(filtrado);
    }
  };

  return (
    <div className="App">
      <Input
        id='localidad'
        name='localidad'
        placeholder='Localidad...'
        onChange={handleChange}
      />
      <ul>
        {localidades.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
