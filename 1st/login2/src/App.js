import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import { Input, Button, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

//COMPONENTES:
function User(props) {
  return (
    <ListGroupItem>{props.name} - {props.email}&nbsp;&nbsp;&nbsp;&nbsp;<Borrar clave={props.clave} quitar={(x)=>props.quitar(x)} /></ListGroupItem>
  )
}

function Borrar(props) {
  return (
    <Button color="danger" outline onClick={() => props.quitar(props.clave)}>Borrar{props.user}</Button>
  );
}

function UserList(props) {
  return (
    <ListGroup numbered>
      {
        props.users.map(e =><>
          <User name={e.name} email={e.email} key={e.id} clave={e.id}
          quitar={(x)=>props.quitar(x)}/>
        </> )
      }
    </ListGroup>
  )
}

function UserForm(props) {
  return (
    <form onSubmit={props.onAddUser}>
      <Row xs="4">
        <Col>
          <Input type="text" placeholder="Nombre" name="name" />
        </Col>
        <Col>
          <Input type="email" placeholder="Email" name="email" />
        </Col>
        <Button size='sm'>Guardar</Button>
      </Row>
    </form>
  );
}
//----------------------------

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 1, name: "Perico", email: "perico@gmail.com" },
        { id: 2, name: "Juanico", email: "juanico@gmail.com" },
        { id: 3, name: "Andrés", email: "andres@gmail.com" }
      ]
    }
  }

  //Creamos el handler para que no refresque la página, con el preventDefault():
  handleOnAddUser(event) {
    event.preventDefault();

    //Creamos un nuevo usuario:
    let user = {
      id: this.state.users.length + 1,
      name: event.target.name.value,
      email: event.target.email.value,
    }
    //Hacemos la copia del state:
    let copiaUsers = this.state.users;

    //Insertamos el usuario en la copia:
    if(copiaUsers.find(u => u.email !== user.email)){
      copiaUsers.push(user);
    }

    //Cambiamos el state:
    this.setState({ users: copiaUsers })
  }

  quitar(usuario) {
    let copiaState = this.state.users.filter(e => e !== usuario);

    this.setState({ users: copiaState })
  }

  render() {
    return (
      <div className="App">
        <p><strong>Añade usuarios</strong></p>
        <UserList quitar={(usuario) => this.quitar(usuario)} users={this.state.users} />
        <UserForm onAddUser={(e) => this.handleOnAddUser(e)} />
      </div>
    );
  }
}

export default App;
