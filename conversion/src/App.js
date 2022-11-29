import React, { Component } from 'react';
import Moneda from './componentes/Moneda';

//CREAR EL COMPONENTE DOLARES
const Dolares = (props) => {
  return <>{props.dolares}</>;
}

//CREAR EL COMPONENTE EUROS
const Euros = (props) => {
  return <>{props.euros}</>;
}

//ÚNICO COMPONENTE (está importado de la carpeta "componentes")
//const Moneda = (props) => {
//  return <>{props.moneda}</>;
//}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      euros: 5,
      factor: 1.05,
    };
  }
  aumentar() {
    let e = this.state.euros;
    e++
    this.setState({ euros: e })
  }
  disminuir() {
    let e = this.state.euros;
    e--;
    if (e >= 0) this.setState({ euros: e })
  }
  render() {
    //
    return (
      <>
        <Moneda moneda={this.state.euros} /> Euros equivalen a <Moneda moneda={this.state.euros * this.state.factor} /> dólares<br />
        <button onClick={() => this.aumentar()}>+</button>
        <button onClick={() => this.disminuir()}>-</button>

      </>
    );

  }
}

export default App;