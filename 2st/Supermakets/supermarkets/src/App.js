import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MapaPersonas from './components/MapaPersonas';
import TotalPersonas from './components/TotalPersonas';
import React from 'react';
import Supermercados from './components/Supermercados';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      poblacion: [
        [0, 5, 4, 2, 9, 8, 0, 8, 8],
        [1, 7, 21, 23, 44, 5, 3, 4, 0],
        [2, 6, 32, 22, 33, 8, 4, 2, 8],
        [1, 2, 43, 4, 56, 65, 34, 11, 8],
        [2, 22, 32, 3, 42, 62, 43, 21, 0],
        [2, 2, 23, 34, 64, 24, 42, 15, 7],
        [0, 2, 36, 43, 61, 26, 64, 12, 0],
        [1, 2, 15, 43, 34, 2, 12, 2, 3],
        [1, 0, 12, 3, 0, 0, 21, 2, 2]
      ],
      supermercados: [{
        //inicializado en componentwillmount
      }],
      supers: [
        //Aqui es cuando YA se ha pulsado sobre una coordenada
      ]
    };

  }

  componentWillMount = () => {
    let copiaState = this.state;
    let arr = [];
    for (let i = 0; i < copiaState.poblacion.length; i++) {
      arr.push([]);
      for (let j = 0; j < copiaState.poblacion[i].length; j++) {
        arr[i].push({ color: "secondary", posX: "", posY: "" })
      }
    }
    copiaState.supermercados = arr;
    this.setState({ copiaState })
  }

  setSupermercado = (x, y) => {
    let copiaState = this.state;
    let copiaSupers = []

    // Función para calcular la suma de 'secondary' alrededor
    const calcularSumaSecondary = (x, y) => {
      let suma = 0;
      for (let i = Math.max(0, x - 1); i <= Math.min(x + 1, copiaState.supermercados.length - 1); i++) {
        for (let j = Math.max(0, y - 1); j <= Math.min(y + 1, copiaState.supermercados[i].length - 1); j++) {
          if (copiaState.supermercados[i][j].color === "secondary") {
            suma += copiaState.poblacion[i][j];
          }
        }
      }
      return suma;
    }

    // Si pulso en un supermercado existente, lo eliminamos:
    if (copiaState.supermercados[x][y].color === "danger") {
      copiaState.supers.forEach(e => {
        if (e.posX !== x || e.posY !== y) {
          copiaSupers.push(e)
        }
      });

      copiaState.supermercados[x][y].color = "secondary"
      copiaState.supermercados[x][y].posX = ""
      copiaState.supermercados[x][y].posY = ""
      copiaState.supers = copiaSupers;
    } else {
      const sumaAlrededor = calcularSumaSecondary(x, y);
      copiaState.supermercados[x][y].color = "danger"
      copiaState.supermercados[x][y].posX = x
      copiaState.supermercados[x][y].posY = y

      copiaState.supers.push({ color: copiaState.supermercados[x][y].color, posX: copiaState.supermercados[x][y].posX, posY: copiaState.supermercados[x][y].posY, personas: calcularSumaSecondary(x, y) })

      // Actualizar personas de supermercados circundantes
      for (let i = Math.max(0, x - 1); i <= Math.min(x + 1, copiaState.supermercados.length - 1); i++) {
        for (let j = Math.max(0, y - 1); j <= Math.min(y + 1, copiaState.supermercados[i].length - 1); j++) {
          if (!(i === x && j === y) && copiaState.supermercados[i][j].color === "danger") {
            copiaState.supers.forEach((supermercado) => {
              if (supermercado.posX === i && supermercado.posY === j) {
                supermercado.personas = calcularSumaSecondary(i, j);
              }
            });
          }
        }
      }
    }

    this.setState({ copiaState })
  }

  render() {

    return (
      <>
        <div className="App">
          <MapaPersonas
            poblacion={this.state.poblacion}
            supermercados={this.state.supermercados}
            setSupermercado={(x, y) => this.setSupermercado(x, y)}
          />
        </div>
        <TotalPersonas
          poblacion={this.state.poblacion}
        />
        <Supermercados
          supermercadosSeleccionados={this.state.supers}
        />
      </>
    );
  }
}

export default App;
