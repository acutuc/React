import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Button } from 'reactstrap';

//COMPONENTES:

const MapaBotones = (props) => {
  // este componente pinta el tablero 9x9 con las props que le paso

  
  let tablero = [];
  for (let i = 0; i < props.listaBotones.length; i++) {
    //Por cada posición de la columna, metemos una fila vacía que rellenamos con botones:
    let a = [];
    for (let j = 0; j < props.listaBotones[0].length; j++) {
      a.push(
          <Button outline={props.listaBotones[i][j].outline} color={props.listaBotones[i][j].col} onClick={() => props.clica(i, j)}></Button>
      )
    }

    tablero.push(a);
    tablero.push(<br/>)
  }
  return tablero;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      // no se puede modificar el state
    }
  }

  //Métodos:

  clica(x, y) {
    // x se supone que la columna, y la fila

    let copiaEstado = this.state.listaBotones;

    console.log(copiaEstado[x][y])

    this.setState({listaBotones : copiaEstado});
  }

  componentWillMount() {
    // aquí es donde creo las nueve columnas con los datos iniciales.

    let tablero = this.state.listaBotones;

    for(let i = 0; i < 9; i++){
      tablero[i] = Array(9).fill({outline : true});
    }

    this.setState({listaBotones : tablero});
  }

  render() {

    return (
      <div className="App">
        <h1> BUCHACA </h1>
        <MapaBotones listaBotones={this.state.listaBotones} clica={(x, y) => this.clica(x, y)}/>
      </div>
    );
  }

}

export default App;
