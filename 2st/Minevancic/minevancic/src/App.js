import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import Botonera from './components/Botonera';
import SelectorMinas from './components/SelectorMinas'
import Campo from './components/Campo';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cantidadMinas: 10,
      campo: [[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]]
    }
    this.carga()
  }

  //Incluye el min y el max:
  generaNumero(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
  }

  carga() {
    let copiaEstado = this.state
    for (let i = 0; i < copiaEstado.cantidadMinas; i++) {

    }
    console.log(this.generaNumero(1, 10))
  }

  bajarMinas() {
    let copiaEstado = this.state

    copiaEstado.cantidadMinas--

    this.setState({ copiaEstado })
  }

  subirMinas() {
    let copiaEstado = this.state

    copiaEstado.cantidadMinas++

    this.setState({ copiaEstado })
  }

  render() {
    return (
      <>
        <SelectorMinas
          minas={this.state.cantidadMinas}
          bajarMinas={() => this.bajarMinas()}
          subirMinas={() => this.subirMinas()}
        />

        <Botonera

        />
        <Campo
          minas={this.state.cantidadMinas}
          generaNumero={() => this.generaNumero(0,9)}
        />
      </>
    );
  }
}

export default App;
