import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapaBotones from './components/MapaBotones';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      listaColores: Array(9).fill(Array(9).fill("secondary")),
      jugadores: true //true -> rojo     false -> azul
    }
  }

  clica = (x, y) => {
    let copiaState = this.state;

    console.log(x)
    console.log(y)
    console.log("---------------------")

    for (let i = copiaState.listaColores[y].length - 1; i >= 0; i--) {
      if (copiaState.listaColores[i][y] === "secondary") {
        //Turno del rojo:
        if (copiaState.jugadores) {
          copiaState.listaColores[i][y] = "danger";
          //Turno del azul:
        } else {
          copiaState.listaColores[i][y] = "primary";
        }
        break;
      }
    }
    //Cambio de turno:
    copiaState.jugadores = !copiaState.jugadores

    //setState:
    this.setState(copiaState)
  }

  render() {
    return (
      <div className="App">
        <h1>Turno de</h1>
        <MapaBotones
          botones={this.state.listaBotones}
          colores={this.state.listaColores}
          clica={(x, y) => this.clica(x, y)}
        />
      </div>
    );
  }
}
export default App;