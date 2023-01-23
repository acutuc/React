import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Login from './components/Login';
import Menu from './components/Menu'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      logged:false,
      lista:[],
    }
  }

  userLogin(telefono, password){
    this.setState({logged:true})
  }

  anadirLista(cosa){
    let copiaLista = this.state.lista;

    copiaLista.push(cosa);

    this.setState({lista:copiaLista});
  }

  render (){
    let obj = [];
    if(!this.state.logged){
      obj.push(<Login userLogin={(telefono, password) => this.userLogin(telefono, password)} />);
    }else{
      obj.push(<Menu anadirLista={(cosa) => this.anadirLista(cosa)} lista={this.state.lista} />)
    }
    return(
      <div className='App'>
        {obj}
      </div>
    );
  };
}

export default App;
