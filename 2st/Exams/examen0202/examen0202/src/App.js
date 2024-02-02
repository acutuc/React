import React, { Component, useState } from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const VentanaModalDiccionario = (props) => {
  const {
    className
  } = props;

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleChange = (event) => {
    if(event.target.name === "nombre"){
      setNombre(event.target.value)
    }
    if(event.target.name === "telefono"){
      setTelefono(event.target.value);
    }
  }

  const handleClick = (event) =>{
    props.aniadeUsuario({nombre:nombre, telefono:telefono})
    
    props.toggle()
  }

  return (
    <div>
      <Modal isOpen={props.mostrar} toggle={props.toggle} className={className} onEntering={() => { }}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>

          <FormGroup row>
            <Label sm={2} > Nombre: </Label>
            <Col sm={10}>
              <Input
                id="nombre"
                name="nombre"
                type="Text"
                onChange={handleChange}
                />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2} > Teléfono: </Label>
            <Col sm={10}>
              <Input
                id="telefono"
                name="telefono"
                type="Text"
                onChange={handleChange}
                />
            </Col>
          </FormGroup>

        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleClick}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </ModalFooter>
      </Modal>
    </div>

  );
}

const Mostrar = ({usuarios, eliminaUsuario}) => {
  return (
    <ul>
      {usuarios.map(e =>{
        return(<li>{e.nombre} - {e.telefono} <Button onClick={() => eliminaUsuario(e.telefono)}>Borrar</Button></li>)
      })}
    </ul>
  );
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // INSERTE AQUÍ EL ESTADO NECESARIO. AQUÍ SE GUARDARÁ TODA LA INFORMACIÓN
      listaUsuarios: [
        {nombre:"Gabriel", telefono:"666666666"},
        {nombre:"Persona 2", telefono:"666332533"}
    ],
      isOpen: false,

    };
  }


  aniadeUsuario = (obj) => {
    let copiaState = this.state;
    
    if(!copiaState.listaUsuarios.find(e => e.telefono === obj.telefono)){
      copiaState.listaUsuarios.push(obj)
    }    

    this.setState({copiaState})
  }


  eliminaUsuario = (telefono) => {
    let copiaState = this.state
    
    let aux = [];

    copiaState.listaUsuarios.map(e => {
      if(e.telefono !== telefono){
        aux.push(e);
      }
    })
    
    copiaState.listaUsuarios = aux;

    this.setState({copiaState})
  }

  setIsOpen(d) {
    if (d == undefined) return;
    this.setState({ isOpen: d })
  }

  toggleModal() { this.setIsOpen(!this.state.isOpen); }



  render() {
    return (
      <div className="App">
        <h1>Listin teléfonico</h1>
        <Mostrar 
        usuarios={this.state.listaUsuarios}
        eliminaUsuario={(e) => this.eliminaUsuario(e)}
        />
        <Button onClick={() => { this.toggleModal() }} color="info">Add</Button>
        <VentanaModalDiccionario
          mostrar={this.state.isOpen}
          aceptar={"Añadir"}
          toggle={() => this.toggleModal()}
          titulo={"Alta en el listín"}
          aniadeUsuario={(e) => this.aniadeUsuario(e)}
        />
      </div>
    );
  }
}
export default App;