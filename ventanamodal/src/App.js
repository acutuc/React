import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppLogin from './components/AppLogin'
import Menu from './components/Menu'
import { Component } from 'react';
import {PHPLOGIN} from './components/Datos';
import axios from 'axios';
import VentanaModalUser from './components/VentanaModalUser';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      menuItem:"UNO",
      logged:false,
      isOpen:false,
    }
  }
  
  changeMenu(item){
    this.setState({menuItem:item})
    if (item==="DOS"){
      this.toggleModal();
    }
  }
  
  toggleModal(){
    this.setState({isOpen:!this.state.isOpen})
  }

  userLogin(telefono,password){
    axios.post(PHPLOGIN,JSON.stringify({
      telefono:telefono,
      password:password
    }))
    .then(res => {
      console.log(res.data.usuario);
      if (res.data.usuario !== undefined){
        this.setState({logged:true});
      }
    })
    
  }

  render(){
    let obj=<><Menu menuItem={this.state.menuItem} changeMenu={(item)=>this.changeMenu(item)} /></>
    if (!this.state.logged){
      obj=<AppLogin userLogin={(telefono,password)=>this.userLogin(telefono,password)}/>
    }
    return (
      <div className="App">
        {obj}
        <VentanaModalUser mostrar={this.state.isOpen} toggle={()=>this.toggleModal()} aceptar={"Aceptar"} titulo={"ALTA USUARIO"} texto={"Usuario:"}/>
      </div>
    );
  }
}

export default App;
