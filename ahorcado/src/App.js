import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Dibujo from './components/Dibujo';
import { Button, Input } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intento: 0,
      palabraAdivinar:"helicoptero"
    }
  }

  seleccionaImagen = () => {

  }

  

  render() {
    return (
      <div className="App">
        <Dibujo intento={this.state.intento} />
      </div>
    );
  }
}
export default App;