import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { Component } from 'react';
import AppLogin from './components/AppLogin';
import axios from 'axios';
import { PHPLOGIN } from './components/Datos';
import Uno from './components/Uno';
import Dos from './components/Dos';
import Tres from './components/Tres';
import Titulo from './components/Titulo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: undefined,
      info: "",
      logged: false,
      //titulo:"",
      
    }
  }

  //MÉTODOS
  changeMenu(item) {
    this.setState({ menuItem: item });
  }

  //Método que comprueba 
  userLogin(telefono, password) {
    axios.post(PHPLOGIN,
      JSON.stringify({
        telefono: telefono,
        password: password
      })
    ).then(res => {
      if (res.data.usuario !== undefined) {
        //Se conecta:
        this.setState({ logged: true })
      }
      this.setState({ info: res.data.mensaje })
    }
    )
    //Comprobamos que pasa telefono y password:
    //console.log(telefono + " " + password)
    //this.setState({ info: "USUARIO O PASSWORD NO VÁLIDA" })
  }

  setInfo(i) {
    this.setState({ info: i })
  }

  setTitulo(t){
    this.setState({titulo : t})
  }

  render() {
    let obj = [];
    //Si no está logueado, mostramos AppLogin para el inicio de sesión:
    if (!this.state.logged) {
      obj.push(<AppLogin setInfo={(i) => this.setInfo(i)} userLogin={(telefono, password) => this.userLogin(telefono, password)} info={this.state.info}></AppLogin>)
    } else {
      obj.push(
        <Menu menuItem={this.state.menuItem} changeMenu={(item) => this.changeMenu(item)} />
      )
      obj.push(<Titulo titulo={this.state.titulo} />)
      if (this.state.menuItem === "UNO") {
        obj.push(<Uno setTitulo={(t) => this.setTitulo(t)} />)
      }
      if (this.state.menuItem === "DOS") {
        obj.push(<Dos setTitulo={(t) => this.setTitulo(t)} />)
      }
      if (this.state.menuItem === "TRES") {
        obj.push(<Tres setTitulo={(t) => this.setTitulo(t)} />)
      }
    }

    return (
      <div className="App">
        {obj}
      </div>
    );
  }

}

export default App;