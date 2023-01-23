import { Button, CardText, Form, FormGroup, Input, Label } from 'reactstrap';
import { useState } from 'react';

export default function Boton(props) {

    //Hooks:
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleChange = (event) => {
        //Ponemos el mensaje a vacío.
        setMensaje("");
        //Usuario:
        if (event.target.name === "usuario") {
            setUsuario(event.target.value);
        }
        //Constraseña:
        if (event.target.name === "password") {
            setPassword(event.target.value);
        }
        //console.log(usuario + " " + password);
    }

    const handleSubmit = () => {
        if (usuario === "" || password === "") {
            if (usuario === "") {
                setMensaje("Campo de usuario vacío");
            }
            if (password === "") {
                setMensaje("Campo de contraseña vacío");
            }
        } else {
            if (usuario === "acutuc" && password === "acutuc") {
                setMensaje("Logueadísimo");
                props.userLogin();
            }else{
                setMensaje("DATOS INCORRECTOS");
            }
        }
    }

    return (
        <Form>
            <FormGroup>
                <Label>Usuario</Label>
                <Input
                    type='text'
                    id="usuario"
                    name='usuario'
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup>
                <Label>Contraseña</Label>
                <Input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                />
                <CardText className='text-danger'>{mensaje}</CardText>
            </FormGroup>
            <FormGroup>
                <Button onClick={handleSubmit}>Enviar</Button>
            </FormGroup>
        </Form>

    );
}