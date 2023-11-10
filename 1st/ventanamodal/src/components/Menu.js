import React,{useState} from 'react';
import { Navbar, NavLink, NavbarBrand, Button } from 'reactstrap'
import VentanaModalUser from './VentanaModalUser';

export default function Menu(props) {
    
    const [isOpen,setIsOpen]=useState(false);
    const toggleModal=()=>{setIsOpen(!isOpen)}


    let colorUno = 'secondary';
    let colorDos = 'secondary';
    let colorTres = 'secondary';
    switch (props.menuItem) {
        case 'UNO':
            colorUno = 'primary';
            break;
        case 'DOS':
            colorDos = 'primary';
            break;
        case 'TRES':
            colorTres = 'primary';
            break;
    }
    return (
        <div>
            <Navbar>
                <NavbarBrand href="/">MYFPSCHOOL</NavbarBrand>
                <NavLink>
                    <Button color={colorUno} onClick={() => props.changeMenu("UNO")}>UNO</Button>{" "}
                    <Button color={colorDos} onClick={() => props.changeMenu("DOS")}>ALTADOS</Button>{" "}
                    <Button color={colorTres} onClick={() => {props.changeMenu("TRES");toggleModal();}}>ALTA USUARIO</Button>
                </NavLink>
            </Navbar>
        <VentanaModalUser mostrar={isOpen} toggle={toggleModal} aceptar={"Aceptar"} titulo={"ALTA USUARIO"} texto={"Usuario:"}/>
        </div > 
    );
}
