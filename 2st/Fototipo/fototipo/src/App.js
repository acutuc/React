import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap';
import DATOS from './components/Datos';
import Cabecera from './components/Cabecera';
import TarjetaPregunta from './components/TarjetaPregunta';

const App = () => {
  console.log(DATOS)
  let obj = [];
  for(let i = 0; i < DATOS.length; i++){
    obj.push(<TarjetaPregunta
    pregunta = {(i+1) + ". " + DATOS[i].pregunta}
    idPregunta={DATOS[i].idPregunta}
    />)
  }
  return (
    <div className="App">
      <Cabecera

      />
      {obj}
      <img src='/images/tipos/tipo1.png' alt='imagen'/>
    </div>
  );
}

export default App;
