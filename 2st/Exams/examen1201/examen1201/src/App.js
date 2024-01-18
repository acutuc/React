import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MapaBotones = ({ listaBotones, clica }) => {
  // este componente pinta el tablero 9x9 con las props que le paso.

  let lista = [];
  for (let i = 0; i < listaBotones.length; i++) {
    let lista2 = [];

    for (let j = 0; j < listaBotones.length; j++) {
      if (i === 0) {
        lista2.push(<Button
          key={i * 10 + j}
          onClick={() => clica(i, j)}
          outline={listaBotones[i][j].outline}
          color={listaBotones[i][j].color}
        />)
      } else {
        lista2.push(<Button
          key={i * 10 + j}
          outline={listaBotones[i][j].outline}
          color={listaBotones[i][j].color}
        />)
      }
    }
    lista.push(
      <>
        {lista2}<br />
      </>
    )
  }

  return (
    <>
      {lista}
    </>
  )
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
    console.log(x + " " + y)
    let copiaState = this.state;

      let contador = 8
      let encontrado = false;

      while(!encontrado && contador !== 0){
        if(copiaState.listaBotones[contador][y].color === "secondary"){
          copiaState.listaBotones[contador][y].color = "primary";
          copiaState.listaBotones[contador][y].outline = false;
          encontrado = true;
        }
        contador--
      }

    this.setState({ copiaState })

  }

  componentWillMount() {
    let copiaState = this.state;

    for (let i = 0; i < copiaState.listaBotones.length; i++) {
      let lista = []
      for (let j = 0; j < copiaState.listaBotones.length; j++) {
        lista.push({ outline: true, color : "secondary"})
      }
      copiaState.listaBotones[i] = lista
    }

    this.setState({ copiaState });
  }

  render() {
    return (
      <div className="App">
        <h1> BUCHACA </h1>
        <MapaBotones
          listaBotones={this.state.listaBotones}
          clica={(x, y) => this.clica(x, y)}
        />
      </div>
    );
  }
}
export default App;