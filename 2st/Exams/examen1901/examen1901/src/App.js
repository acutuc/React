import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Altas = ({nuevoUsuario}) => {
  // UTILICE HOOKS EN ESTE COMPONENTE
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("")

  const handleChange = (event) => {
    if(event.target.name === "nombre"){
      setNombre(event.target.value)
    }
    if(event.target.name === "apellidos"){
      setApellidos(event.target.value)
    }
    if(event.target.name === "telefono"){
      setTelefono(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
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

const Mostrar = ({ contactos, borraUsuario }) => {
  // ESTE COMPONENTE MUESTRA EL LISTÍN TELEFÓNICO.
  return (
    <ul>
      {contactos.map(e => {
        return (<li>{e.nombre + " " + e.apellidos + " " + e.telefono + " "}<Button color='secondary' onClick={(telefono) => borraUsuario(e.telefono)}>X</Button></li>)
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
        { nombre: "Gabriel", apellidos: "Allende", telefono: "607666356" },
        { nombre: "Nombre 2", apellidos: "Apellido 2", telefono: "123456789" }
      ]
    };
  }

  nuevoUsuario = (nombre, apellidos, telefono) => {
    let copiaState = this.state;

    let nuevoUsuario = {}

    if(copiaState.contactos.find(e => e.telefono === telefono) === undefined){
      nuevoUsuario.nombre = nombre;
      nuevoUsuario.apellidos = apellidos;
      nuevoUsuario.telefono = telefono
      copiaState.contactos.push(nuevoUsuario);
    }
    
    this.setState({copiaState})
  }

  borraUsuario = (telefono) => {
    let copiaState = this.state;
    let nuevosUsuarios = []

    copiaState.contactos.filter(e => {
      if(telefono !== e.telefono){
        nuevosUsuarios.push(e)
      }
    })

    copiaState.contactos = nuevosUsuarios;
    
    this.setState({copiaState})
  }

  render() {
    return (
      <div className="App">
        <Mostrar
          contactos={this.state.contactos}
          borraUsuario={(telefono) => this.borraUsuario(telefono)}
        />
        <Altas
        nuevoUsuario={(nombre, apellidos, telefono) => this.nuevoUsuario(nombre, apellidos, telefono)}
        />
      </div>
    );
  }
}
export default App;
