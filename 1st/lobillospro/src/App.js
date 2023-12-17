import './App.css';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MiBoton from './componentes/MiBoton';


class App extends Component {
  constructor(props) {
    super(props);
    //this.state es un objeto.
    this.state = {
      pulsaciones: [0, 0, 0],
      colores: ["secondary", "secondary", "secondary"],
    };
  }

  //esta función siempre se ejecuta siempre y cuando haya un renderizado.
  componentDidMount() {
    //console.log("hola");
    let copiaState = this.state;
    for (let i = 0; i < this.state.colores.length; i++) {
      if (this.state.pulsaciones[i] === 0) {
        copiaState.colores[i] = "danger";
      } else {
        copiaState.colores[i] = "warning";
      }
    }
    //console.log("cambio");
    this.setState(copiaState);
  }

  //esta función se ejecuta después de un setState. onchange
  componentDidUpdate() {
    //console.log("adios");
  }

  comprobarMayor(pos){
    let copiaState = this.state;
    
    let valor = copiaState.pulsaciones[pos];

    let esMayor = true;
    for(let i = 0; i < this.state.pulsaciones.length; i++){
      if(valor <= this.state.pulsaciones[i] && pos !== i){
        esMayor = false;
        break;
      }
    }
    if(esMayor){
      this.todosWarning(pos);
      copiaState.colores[pos] = "success";
      
    }else{
      copiaState.colores[pos] = "warning";
    }
    this.setState(copiaState);
    
  }

  todosWarning(pos){
    let copiaState = this.state;
    for(let i = 0; i < this.state.pulsaciones.length; i++){
      if(i !== pos){
        copiaState.colores[i] = "warning";
      }
    }
    this.setState(copiaState);
  }

  sumar(pos) {
    let copiaState = this.state;
    copiaState.pulsaciones[pos]++;
    this.setState(copiaState);
    this.comprobarMayor(pos);
  }

  render() {
    return (
      <div className="App">
        {/*puedo pasar las propiedades asignándoles el nombre q me salga de los wevos
          NO ES UN BOTÓN DE VERDAD. Es una etiqueta vacía.
        */}
        <MiBoton
          pakito={this.state.pulsaciones[0]}
          saes={this.state.colores[0]}
          onthefly={() => this.sumar(0)}
        />
        <MiBoton
          pakito={this.state.pulsaciones[1]}
          saes={this.state.colores[1]}
          onthefly={() => this.sumar(1)}
        />
        <MiBoton
          pakito={this.state.pulsaciones[2]}
          saes={this.state.colores[2]}
          onthefly={() => this.sumar(2)}
        />
      </div>
    );
  }

}

export default App;
