import React, { Component } from 'react';


class App extends Component {

constructor(props){
super(props);
this.state = {
saludo:"SALUDA EN VARIOS IDIOMAS",
};
this.mensajeingles = this.ingles.bind(this)
}

ingles(){ this.setState({saludo:"HELLO"}) }
aleman(){ this.setState({saludo:"HALLO"}) }
sueco(){ this.setState({saludo:"HEJ"}) }
espanol(){ this.setState({saludo:"HOLA"}) }

saludar(valor){
  this.setState({saludo:valor})
}

render() {
//

return(
<>
<button onClick={this.mensajeingles}>INGLES</button>
<button onClick={()=>this.aleman()}>ALEMAN</button>
<button onClick={()=>this.sueco()}>SUECO</button>
<button onClick={()=>this.espanol()}>ESPAÑOL</button>
<button onClick={()=>this.saludar("NIJAO")}>CHINO</button><br/>
{this.state.saludo}
</>
);

}
}

export default App;