//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

const MapaBotones = (props) => {
  let lista = [];
  for (let i = 0; i < props.listaBotones.length; i++) {
    let lista2 = [];

    for (let j = 0; j < props.listaBotones.length; j++) {
      lista2.push(<Button
        key={i * 10 + j}
        color={props.listaBotones[i][j].color}
        onClick={() => props.pulsado(i, j)}
      />)
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
    super(props)
    this.state = {
      listaBotones: Array(9).fill(null),
      listaColores: ["primary", "secondary", "success", "warning", "danger"],
    }
    this.carga();
  }

  carga() {
    let copiaBotones = this.state.listaBotones;

    for (let i = 0; i < copiaBotones.length; i++) {
      let aux = []
      for (let j = 0; j < copiaBotones.length; j++) {
        
        aux.push({color:"info", pulsado:false})
      }
      copiaBotones[i] = aux;

    }
    this.setState(copiaBotones)
  }

  pulsado(x, y) {
    console.log(x)
    console.log(y)
    let copiaBotones = this.state.listaBotones;

    copiaBotones[x][y].color = "danger";
    copiaBotones[x][y].pulsado = true;

    this.setState(copiaBotones);
    console.log(copiaBotones)
  }

  render() {
    return (
      <MapaBotones
        listaBotones={this.state.listaBotones}
        pulsado={(x, y) => this.pulsado(x, y)}
      />
    );
  }
}

export default App;