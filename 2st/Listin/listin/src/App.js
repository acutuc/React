import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Altas = ({ nuevoUsuario }) => {
  // UTILICE HOOKS EN ESTE COMPONENTE
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "nombre") {
      setNombre(event.target.value);
    }
    if (event.target.name === "apellidos") {
      setApellidos(event.target.value);
    }
    if (event.target.name === "telefono") {
      setTelefono(event.target.value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    nuevoUsuario(nombre, apellidos, telefono);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="Nombre">Nombre:</Label>
        <Input
          name="nombre"
          id="nombre"
          placeholder="introduzca nombre"
          onChange={handleChange}
        />
        <Label for="Nombre">Apellidos:</Label>
        <Input
          name="apellidos"
          id="apellidos"
          placeholder="introduzca apellidos"
          onChange={handleChange}
        />
        <Label for="Nombre">Telefono:</Label>
        <Input
          name="telefono"
          id="telefono"
          placeholder="introduzca telefono"
          onChange={handleChange}
        />
      </FormGroup>
      <Button>Añadir</Button>
    </Form>
  );
}

const Mostrar = ({ contactos }) => {
  // ESTE COMPONENTE MUESTRA EL LISTÍN TELEFÓNICO.

  return (
    <ul>
      {contactos.map(e => {
        return (<li>{e.nombre + " " + e.apellidos + " " + e.telefono}</li>)
      })}
    </ul>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA INFORMACIÓN DE LA APLICACIÓN. EL LISTÍN TELEFÓNICO
      contactos: [
        { nombre: "gabriel", apellidos: "allende", telefono: "607666356" },
        { nombre: "romina", apellidos: "palacio", telefono: "53453454" }
      ],
    };
  }

  nuevoUsuario = (nombre, apellidos, telefono) => {
    let copiaState = this.state;
    let newUser = {};

    //Controlamos que no se repita el nombre:
    if (copiaState.contactos.find(e => e.nombre === nombre) === undefined) {
      newUser.nombre = nombre;
      newUser.apellidos = apellidos;
      newUser.telefono = telefono
      copiaState.contactos.push(newUser);
    }
    this.setState({ copiaState })
  }

  render() {
    return (
      <div className="App">
        <Mostrar
          contactos={this.state.contactos}
        />
        <Altas
          nuevoUsuario={(nombre, apellidos, telefono) => this.nuevoUsuario(nombre, apellidos, telefono)}
        />
      </div>
    );
  }
}
export default App;