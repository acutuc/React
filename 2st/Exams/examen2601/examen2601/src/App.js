import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Alert, Row, Col, UncontrolledAccordion, AccordionItem,
    AccordionHeader, AccordionBody, Input, Button, Modal, ModalHeader,
    ModalBody, ModalFooter, FormGroup, Label
} from 'reactstrap';
import { FARMACOS } from './componentes/datos';

const VentanaModalDiccionario = (props) => {
    const [filtradoIncluido, setFiltradoIncluido] = useState("")
    const [elegidoIncluido, setElegidoIncluido] = useState("");

    const [filtradoExcluido, setFiltradoExcluido] = useState("");
    const [elegidoExcluido, setElegidoExcluido] = useState("");

    const { className } = props;

    const handleChange = (event) => {
        // COMPLETA ESTA FUNCION
        if (props.selection === true) {
            if (event.target.name === "filtro") {
                setFiltradoExcluido(event.target.value)
            }

            if (event.target.name === "selectMulti") {
                setElegidoExcluido(event.target.value);
            }
        } else {
            if (event.target.name === "filtro") {
                setFiltradoIncluido(event.target.value)
            }

            if (event.target.name === "selectMulti") {
                setElegidoIncluido(event.target.value);
            }
        }

    }

    const handleClick = (event) => {
        if (props.selection === true) {
            props.add(elegidoExcluido)
            setElegidoExcluido("");
        } else {
            props.add(elegidoIncluido)
            setElegidoIncluido("");
        }


    }

    return (
        <div>
            <Modal isOpen={props.mostrar} toggle={props.toggle}
                className={className} onEntering={"//ESTO SE EJECUTA CUANDO MUESTRAS LAVENTANA"}>
                <ModalHeader toggle={props.toggle}>{props.titulo}</ModalHeader>
                <ModalBody>
                    <FormGroup row>
                        <Label sm={2} > Filtrar: </Label>
                        <Col sm={10}>

                            <Input onChange={handleChange}
                                id="filtro"
                                name="filtro"
                                type="Text"
                            />

                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={12}>
                            <Input onChange={handleChange} onClick={handleChange}
                                id="selectMulti"
                                name="selectMulti"
                                type="select"
                            >
                                {FARMACOS.map(e => {
                                    if (filtradoIncluido === "") {
                                        return (<option>{e.codATC}|{e.descATC}</option>)
                                    }else{
                                        //FALTA FILTRO
                                    }
                                })}
                            </Input>
                        </Col>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    {elegidoIncluido}<Button color="primary"
                        onClick={handleClick}>{props.aceptar}</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </ModalFooter>
            </Modal>
        </div >
    );
}

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            rxseleccionar: "",
            rxenmascarar: "",
            diccionario: "FÁRMACO",
            selection: false
        }
    }

    handleChange = (event) => {

    }

    handleClick = (event) => {
        let copiaState = this.state

        if (event.target.name === "incluidos") {
            copiaState.rxseleccionar = "";
        } else {
            copiaState.rxenmascarar = "";
        }

        this.setState({ copiaState })
    }

    add(datos) {
        let copiaState = this.state

        if (copiaState.selection === false) {
            copiaState.rxseleccionar += datos + ", "
        } else {
            copiaState.rxenmascarar += datos + ", "
        }
        console.log(copiaState.selection)

        this.toggleModal();

        this.setState({ copiaState })
    }

    setIsOpen(d) {
        if (d == undefined) return;
        this.setState({ isOpen: d })
    }

    toggleModal(cambio) {
        let copiaState = this.state
        if (cambio === "excluir") {
            copiaState.selection = true
        } else {
            copiaState.selection = false
        }
        this.setIsOpen(!this.state.isOpen);
        this.setState({ copiaState })
    }

    render() {
        return (
            <>
                <div>
                    <UncontrolledAccordion
                        defaultOpen={[
                            '1'
                        ]}
                        stayOpen
                    >
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                GESTION DE FARMACOS
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                <Row>
                                    <Col>
                                        <Alert color="info">
                                            Incluir X Medicamentos:
                                            <Input type="textarea"
                                                name="rxseleccionar" onChange={this.handleChange.bind(this)}
                                                value={this.state.rxseleccionar} />
                                            <Button
                                                onClick={() => { this.toggleModal("incluir") }} color="info">Add</Button>
                                            {" "}<Button color="info" name='incluidos'
                                                onClick={(e) => this.handleClick(e)}>Clear</Button>
                                        </Alert>
                                    </Col>
                                    <Col>
                                        <Alert color="danger">
                                            Excluir X Medicamentos:
                                            <Input type="textarea"
                                                name="rxenmascarar" onChange={this.handleChange.bind(this)}
                                                value={this.state.rxenmascarar} />
                                            <Button
                                                onClick={() => { this.toggleModal("excluir") }} color="danger" >Add</Button>
                                            {" "}<Button color="danger" name='excluidos'
                                                onClick={(e) => this.handleClick(e)}>Clear</Button>
                                        </Alert>
                                    </Col>
                                </Row>
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>
                </div>
                <VentanaModalDiccionario diccionario={this.state.diccionario}
                    add={(datos) => this.add(datos)} mostrar={this.state.isOpen} aceptar=
                    {"Añadir"} toggle={() => this.toggleModal()} titulo={"Add" + this.state.diccionario} selection={this.selection} />
                <br />
            </>
        );
    }
}

class App extends Component {
    render() {

        return (
            <div className="App">
                <Filter />
            </div>
        );
    }
}
export default App;
