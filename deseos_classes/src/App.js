import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Component } from 'react';
import {Button} from 'reactstrap';

class DesireList extends Component {
  render() {
    return (
      <ul>
        {this.props.deseos.map(d => <>
          <PrintDeseo deseo={d} />
          <Borrar deseo={d} quitar={(elemento) => this.props.quitar(elemento)} />
        </>)}
      </ul>
    );
  }
}

class Desire extends Component {
  render() {
    return (
      <form onSubmit={this.props.onAddDeseo}>
        <input type="text" placeholder="Escribe tu deseo" name="deseo" />
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deseos: ["Gambas", "Jamón"],
    }
  }
  render() {
    return (
      <div className="App">
        <h1>AÑADE TU REGALO FAVORITO </h1>
        <DesireList quitar={(elemento) => this.quitar(elemento)} deseos={this.state.deseos}></DesireList>
        <Desire onAddDeseo={this.handleAnadirDeseo.bind(this)}></Desire>
      </div>
    );
  }

  quitar(elemento) {
    let copia = this.state.deseos.filter(d => d !== elemento);

    this.setState({deseos:copia});
  }

  handleAnadirDeseo(event) {
    event.preventDefault();

    let d = this.state.deseos;
    d.push(event.target.deseo.value);

    this.setState({ deseos: d });
  }

}

function PrintDeseo(props) {
  return (<li>{props.deseo}</li>)
}

function Borrar(props) {
  return (
    <Button size="sm" onClick={() => props.quitar(props.deseo)}>Borrar{props.deseo}</Button>
  )
}

export default App;
