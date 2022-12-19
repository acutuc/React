//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlashCard from './componentes/FlashCard';
import { GODOS } from './shared/datos';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    const LosReyes = GODOS.map(rey => <FlashCard className="carta"
      imagen={rey.imagen}
      titulo={rey.nombre}
      texto={rey.texto}
    />);
    return (
      <div className="App">
        {LosReyes}
      </div>
    );
  }
}

export default App;