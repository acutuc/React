import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Sino from './componentes/SinoComponent';


class App extends Component() {
    constructor(props){
      super(props)
      this.state={
        imagen:"/assets/images/yes.png",
      }
    }
    render(){
      return (
        <div className='App'>
          <Sino 
            imagen={this.state.imagen}
          />
        </div>
      );
    }
}


export default App;
