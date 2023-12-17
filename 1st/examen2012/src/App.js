import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaBotones = (props) => {
  // este componente pinta el tablero 9x9 con las props que le paso.

  let columna = [];
  for (let i = 0; i < props.listaBotones.length; i++) {
    let fila = [];
    for (let j = 0; j < props.listaBotones.length; j++) {
      fila.push(
        <>
          <Button outline key={i*10 + j} onClick={() => props.clica(i, j)}></Button>
        </>
      )
    }
    columna.push(
      <>
        <br/>
        {fila}
      </>
    )
  }
  return columna;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaBotones: Array(9).fill(null),
      // no se puede modificar el state
    }
  }

  clica(x, y) {
    // x se supone que la columna, y la fila
    let copiaEstado = this.state.listaBotones;

    if(copiaEstado[x] === 0){
      
    }
    
    this.setState({listaBotones:copiaEstado})
    console.log(copiaEstado)
  }

  componentWillMount() {
    // aquí es donde creo las nueve columnas con los datos iniciales.
    
    let copiaEstado = this.state.listaBotones;

    for (let i = 0; i < 9; i++) {
      copiaEstado[i] = Array(9).fill(null);
    }

    this.setState({ listaBotones: copiaEstado });
  }

  render() {
    return (
      <div className="App">
        <h1> BUCHACA </h1>
        <MapaBotones listaBotones={this.state.listaBotones} click={(x, y)=>this.clica(x, y)}/>
      </div>
    );
  }
}
export default App;