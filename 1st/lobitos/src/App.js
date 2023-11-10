import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorBot: [0, 0, 0, 0, 0],
      colores:["secondary", "secondary", "secondary", "secondary", "secondary"],
      max:0,
    }
  }
  //crear método aumentar con un parámetro (pos)
  aumentar(pos){
    //copia valorBot:
    let copiaValor = this.state.valorBot;
    copiaValor[pos]++;
    this.setState({valorBot:copiaValor})
    
    //copia colores:
    let copiaColor = this.state.colores;
    copiaColor[pos] = "primary";

    //copia max:
    let copiaMax = this.state.max;
    
    if(copiaColor[pos] > copiaMax){
      copiaMax = copiaColor[pos];
    }
    let c = this.state.valorBot.map(v => v==copiaMax ? "primary" : "secondary");
    this.setState({valorBot:copiaValor, max:copiaMax, colores:copiaColor})
  }
  // aumentará el valor de la posición pos en 1
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Botoncillo 
          valorNum={this.state.valorBot[0]}
          click={() => this.aumentar(0)}
          colour={this.state.colores[0]}/>
          <Botoncillo
          valorNum={this.state.valorBot[1]}
          click={() => this.aumentar(1)}
          colour={this.state.colores[1]}
          />
          <Botoncillo
          valorNum={this.state.valorBot[2]}
          click={() => this.aumentar(2)}
          colour={this.state.colores[2]}/>
          <Botoncillo
          valorNum={this.state.valorBot[3]}
          click={() => this.aumentar(3)}
          colour={this.state.colores[3]}/>
          <Botoncillo
          valorNum={this.state.valorBot[4]}
          click={() => this.aumentar(4)}
          colour={this.state.colores[4]}/>
        </header>
      </div>
    );
  }
}

function Botoncillo(props) {
  //llamar a aumentar() en el onclick
  return (
    <Button color={props.colour} onClick={() => props.click()}>{props.valorNum}</Button>
  )

}

export default App;