import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu';
import { useState } from 'react';
import AppLogin from './components/AppLogin';

const App = () => {
  const [menuItem, setMemuItem] = useState("UNO");
  const [logged, setLogged] = useState(false)

  let obj = []

  if (!logged) {
    obj.push(
      <AppLogin
        setLogged={setLogged}
      />
    )
  } else {
    obj.push(
      <Menu
        menuItem={menuItem}
        setMenuItem={setMemuItem}
      />
    )
  }
  return (
    <div className="App">
      {obj}
    </div>
  );
}

export default App;
