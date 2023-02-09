
import React, { useState } from 'react';
import axios from 'axios';
import { PHPINSERT } from './Insert';
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter,Label } from 'reactstrap';

const VentanaModalUser = (props)=>{
    const {className}=props;

    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('');
    const [saldo, setSaldo] = useState('0');
    const [admincheck, setAdmincheck] = useState('0');

    const handleChange = (event) => {
        const target = event.target;
        //console.log(event.target.value)
        if (target.name === "nombre") {
          setNombre(target.value);
        }
        if (target.name === "telefono") {
            setTelefono(target.value);
        }
        if (target.name === "password") {
          setPassword(target.value);
        }
        if (target.name === "saldo") {
          setSaldo(target.value);
        }
        if (target.name === "admincheck") {
          setAdmincheck(target.value);
        }
    }

    const clicar=()=>{
        if (nombre === '' || telefono === '' || password === '') return;
        axios.post(PHPINSERT,JSON.stringify({
          telefono:telefono,
          nombre:nombre,
          password:password,
          saldo:saldo,
          tipo:admincheck,
        }))
        props.toggle();
      }
        
    

    return(
        <Modal isOpen={props.mostrar} toggle={props.toggle} className={className}>
        <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
        <ModalBody>
          {props.texto}
          <Input type="tel" name="telefono" id="tel" placeholder="teléfono" onChange={handleChange}/>
          <Input type="text" name="password" id="password" placeholder="password" onChange={handleChange}/>
          <Input type="text" name="nombre" id="nombre" placeholder="nombre" onChange={handleChange}/>
          Saldo:<Input type="number" name="saldo" id="saldo" placeholder="saldo" defaultValue="0" onChange={handleChange}/>
          <Input type="checkbox" name="admincheck" id="admincheck" onChange={handleChange}/>{' '}<Label check>Administrador</Label>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={clicar}>{props.aceptar}</Button>
          <Button color="secondary" onClick={props.toggle}>Salir</Button>
        </ModalFooter>
      </Modal>
    );
}

export default VentanaModalUser;