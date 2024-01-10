import React, { useState } from 'react';
import { Row, Col, Card, CardTitle, CardText, Form, FormGroup, Button, Label, Input } from 'reactstrap';

const AppLogin = ({ setLogged }) => {
    const [clave, setClave] = useState("");
    const [usuario, setUsuario] = useState("");
    const [informacion, setInformacion] = useState("")

    //HandleChange, recoge los datos del usuario y contraseña
    const handleChange = (event) => {
        if(event.target.name === "telefono"){
            setUsuario(event.target.value);
        }
        if(event.target.name === "password"){
            setClave(event.target.value);
        }
    }

    // Función para validar el formulario de login
    const validaUsuario = () => {
        if (usuario === '' || clave === '') {
            setInformacion("RELLENE TODOS LOS CAMPOS")
        } else {
            if (usuario === "admin" && clave === "1234") {
                setLogged(true);
            } else {
                setInformacion("DATOS INCORRECTOS")
            }
        }
    }

    return (
        <Row>
            <Col sm="4"></Col>
            <Col sm="4">
                <Card body>
                    <CardTitle className="text-center" tag="h4">
                        Log in
                    </CardTitle>
                    <Form inline>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label className="me-sm-2" for="exampleEmail">User id</Label>
                            <Input
                                id="Telefono"
                                name="telefono"
                                placeholder="type your user id"
                                type="text"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                            <Label className="me-sm-2" for="examplePassword">Password</Label>
                            <Input
                                id="Password"
                                name="password"
                                type="password"
                                onChange={handleChange}
                            />
                        </FormGroup>
                        <br />
                        <Button color="primary" size="lg" block onClick={() => validaUsuario()}>
                            <strong>Log in</strong>
                        </Button>
                        <CardText className="text-danger">{informacion}</CardText>

                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default AppLogin;