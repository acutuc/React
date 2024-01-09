import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button } from 'reactstrap';

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      contador: 0,
      pulsado: ['secondary', 'secondary', 'secondary', 'secondary', 'secondary'],
    };
  }

  render() {
    const cambia = (boton) => {
      let copiaEstado = this.state

      if (copiaEstado.pulsado[boton] === "secondary") {
        copiaEstado.contador++
        copiaEstado.pulsado[boton] = "danger";
      }

      this.setState({ copiaEstado })

    }

    let obj = [];

    for (let i = 0; i < 5; i++) {
      obj.push(<Botoncillo color={this.state.pulsado[i]} cambia={() => cambia(i)}> </Botoncillo>)
    }

    return (
      <div className="App">
        <p>{this.state.contador}</p>
        {obj}
      </div>
    );
  }
}



const Botoncillo = ({color, cambia}) => {
  return (
    <Button color={color} onClick={cambia}> </Button>
  );
}



export default App;