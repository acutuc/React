import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapaBotones from './components/MapaBotones';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      listaColores: ["primary", "danger"],
      jugadores: ["rojo", "azul"]
    }
  }

  clica = (x, y) =>{
    let copiaState = this.state;

    console.log(x)
    console.log(y)
    console.log("---------------------")


    
  }

  render() {
    return (
      <div className="App">
        <h1>Turno de</h1>
        <MapaBotones
          botones={this.state.listaBotones}
          colores={this.state.listaColores}
          clica={(x, y)=>this.clica(x, y)}
        />
      </div>
    );
  }
}
export default App;