import './App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deseos from './components/Deseos';
import Deseo from './components/Deseo';

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      palabras: ["contenido", "contenido2"]
    };
  }

  actualizaDeseos(event){
    event.preventDefault();

    let copiaState = this.state

    copiaState.palabras.push(event.target.deseo.value)

    this.setState(copiaState);
  }

  borrar(deseo){
    let copiaState = this.state

    this.setState(copiaState.palabras.filter(e => e !== deseo))
  }

  render() {
    return (
      <div className="App">
        <h1>Lista de deseos</h1>
        <h4>Añade tu regalo favorito</h4>
        <Deseos
        contenido={this.state.palabras}
        borrar={this.borrar}
        />
        <Deseo
        actualizaDeseos={(e) => this.actualizaDeseos(e)}
        />
      </div>
    );
  }
}



export default App;