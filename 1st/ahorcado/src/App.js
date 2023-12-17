import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Dibujo from './components/Dibujo';
import Palabra from './components/Palabra';

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

  comprueba(intento){
    let copiaIntento = this.state.intento;

    if(intento === true){
      
    }
  }
  
  render() {
    return (
      <div className="App">
        <Dibujo intento={this.state.intento} palabraAdivinar={this.state.palabraAdivinar}/>
        <Palabra palabraAdivinar={this.state.palabraAdivinar}/>
      </div>
    );
  }
}
export default App;