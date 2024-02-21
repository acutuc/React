import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import MapaPersonas from './components/MapaPersonas';
import TotalPersonas from './components/TotalPersonas';
import React from 'react';


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
    };

  }

  componentWillMount = () => {
    let copiaState = this.state;
    let arr = [];
    for (let i = 0; i < copiaState.poblacion.length; i++) {
      arr.push([]);
      for (let j = 0; j < copiaState.poblacion[i].length; j++) {
        arr[i].push({ color: "secondary" })
      }
    }
    copiaState.supermercados = arr;
    this.setState({ copiaState })
  }

  setSupermercado = (x, y) => {
    let copiaState = this.state;
    if (copiaState.supermercados[x][y].color === "danger") {
      copiaState.supermercados[x][y].color = "secondary"
    } else {
      copiaState.supermercados[x][y].color = "danger"
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
      </>
    );
  }
}

export default App;
