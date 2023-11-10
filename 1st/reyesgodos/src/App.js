import './App.css';
import { Component } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "success", 
      cantidad:300,
      contador:0,
      pulsado: "danger",
    }
  }

  suma(){
    let copiaEstado = this.state;
    let nuevoState = {contador:copiaEstado.contador + 1}

    this.setState(nuevoState);
  }

  render() {
    let lista = [];
    for (let i = 0; i < this.state.cantidad; i++){
      lista.push(
        <Button 
        color={this.state.color}
        onClick={() => this.suma()}
        >
          {i+this.state.contador}
        </Button>
      )
    }
    return (
      <div>
        {lista}
        <Button color="danger">HOLA</Button>
      </div>
        
    )
  }
}

export default App;
