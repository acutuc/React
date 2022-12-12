import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component, Fragment, useState } from 'react';
import React from 'react';

/*
function App() {
  /*let contadorState = React.useState(100);
  let contadorValor = contadorState[0];
  let contadorActualizador = contadorState[1];
 const [contadorValor, contadorActualizador] = useState(100);
  return (
    <div>
      <span>{contadorValor}</span>
        <Button onClick={() => contadorActualizador(contadorValor + 1)}>Incrementar +</Button>&nbsp;
        <Button onClick={() => contadorActualizador(contadorValor - 1)}>Decrementar -</Button>
    </div>
  );
}
/*
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador:100,
    }
  }

  sumar(){
    let copiaState = this.state;
    let nuevoState = {contador:copiaState.contador + 1}
    this.setState(nuevoState);
  }

  restar(){
    let nuevoState = this.state;
    let nuevoValor = {contador:nuevoState.contador - 1};
    this.setState(nuevoValor);
  }

  render() {
    return (
      <Fragment>
        <span>{this.state.contador}</span>
        <Button color='secondary' onClick={() => this.sumar()}>Sumar</Button>&nbsp;
        <Button color='primary' onClick={() => this.restar()}>Restar</Button>
      </Fragment>
    )
  }
}
export default App;
