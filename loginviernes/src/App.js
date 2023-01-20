import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import { Component } from 'react';
import AppLogin from './components/AppLogin';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuItem:undefined,
    }
  }

  //MÉTODOS
  changeMenu(item){
    this.setState({menuItem:item});
  }

  render(){
    return (
      <div className="App">
        <Menu menuItem={this.state.menuItem} changeMenu={(item)=>this.changeMenu(item)}/>
        <AppLogin></AppLogin>
      </div>
    );
  }
  
}

export default App;