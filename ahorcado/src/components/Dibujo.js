import { useState } from 'react';
import { Button, Input } from 'reactstrap';

export default function Dibujo(props) {
    const [letra, setLetra] = useState("")

    const handlechange = (event) => {
        if (event.target.name === "letra") {
            setLetra(event.target.value);
        }
    }

    const handleClick = () => {
        for (let i = 0; i < props.palabraAdivinar.length; i++) {
            if (letra === props.palabraAdivinar[i]) {
                console.log("si")
                return true;
            }
        }
        console.log("no")
        return false;
    }

    let obj = [];
    if (props.intento === 0) {
        obj.push(<>
            <img src="images/ahorcado0.jpeg" alt="imagen0" />
            <Input
                name='letra'
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
                onChange={handlechange}
            />
            <Button onClick={() => {handleClick(); props.comprueba()}}>Envía</Button>
        </>)
    }

    if (props.intento === 1) {
        obj.push(<>
            <img src="images/ahorcado1.jpeg" alt="imagen1" />
            <Input
                className='letra'
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
                onChange={handlechange}
            />
            <Button onClick={() => {handleClick(); props.comprueba()}}>Envía</Button>
        </>)
    }

    if (props.intento === 2) {
        obj.push(<>
            <img src="images/ahorcado2.jpeg" alt="imagen2" />
            <Input
                className='letra'
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
                onChange={handlechange}
            />
            <Button onClick={() => {handleClick(); props.comprueba()}}>Envía</Button>
        </>)
    }

    if (props.intento === 3) {
        obj.push(<>
            <img src="images/ahorcado3.jpeg" alt="imagen3" />
            <Input
                className='letra'
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
                onChange={handlechange}
            />
            <Button onClick={() => {handleClick(); props.comprueba()}}>Envía</Button>
        </>)
    }

    if (props.intento === 4) {
        obj.push(<>
            <img src="images/ahorcado4.jpeg" alt="imagen4" />
            <Input
                className='letra'
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
                onChange={handlechange}
            />
            <Button onClick={() => {handleClick(); props.comprueba()}}>Envía</Button>
        </>)
    }

    if (props.intento === 5) {
        obj.push(<>
            <img src="images/ahorcado5.jpeg" alt="imagen5" />
            <Input
                className='letra'
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
                onChange={handlechange}
            />
            <Button onClick={() => {handleClick(); props.comprueba()}}>Envía</Button>
        </>)
    }

    if (props.intento === 6) {
        obj.push(<>
            <img src="images/ahorcado6.jpeg" alt="imagen6" />
            <Input
                className='letra'
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
                onChange={handlechange}
            />
            <Button onClick={() => {handleClick(); props.comprueba()}}>Envía</Button>
        </>)
    }
    return (
        <>
            {obj}
        </>
    )
}