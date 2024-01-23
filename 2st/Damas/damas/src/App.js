import React, { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Botonera from './components/Botonera';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //DEFINE EL ESTADO DE TU COMPONENTE PRINCIPAL
      //Recuerda que si defines una tabla 8x8 tu estado será inválido.
    };
  }

  componentWillMount() {
    //ESTE MÉTODO SE EJECUTARÁ AL PRINCIPIO DE LA APLICACIÓN. ANTES DE RENDERIZAR.
    let copiaState = this.state;

    let tablero = []
    for (let i = 0; i < 8; i++) {
      let columna = []
      for (let j = 0; j < 8; j++) {
        if (i % 2 === 0) {
          if (j % 2 === 0) {
            columna.push({ color: "secondary", outline: true })
          } else {
            if (i > 4) {
              columna.push({ color: "success", outline: false })
            } else {
              columna.push({ color: "secondary", outline: false })
            }
          }
        } else {
          if (j % 2 !== 0 && j) {
            columna.push({ color: "secondary", outline: true })
          } else {
            if (i > 4) {
              columna.push({ color: "success", outline: false })
            } else {
              columna.push({ color: "secondary", outline: false })
            }
          }
        }
      }
      tablero.push(columna)
    }
    copiaState.tablero = tablero
    
    this.setState({ copiaState })
  }

  mueveFicha = (x, y) => {
    let copiaState = this.state;
    console.log(x + " " + y)
    copiaState.tablero[x-1][y+1].color = "success";
    copiaState.tablero[x][y].color = "secondary";
    this.setState({copiaState})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Botonera
            tablero={this.state.tablero}
            mueveFicha={(x, y) => this.mueveFicha(x, y)}
          />
        </header>
      </div>
    );
  }
}
export default App;