import { Button, Input } from 'reactstrap';

export default function Dibujo(props) {

    let obj = [];
    if (props.intento === 0) {
        obj.push(<>
            <img src="images/ahorcado0.jpeg" alt="imagen0" />
            <Input
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
            />
            <Button>Envía</Button>
        </>)
    }

    if (props.intento === 1) {
        obj.push(<>
            <img src="images/ahorcado1.jpeg" alt="imagen1" />
            <Input
            className='boton'
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
            />
            <Button>Envía</Button>
        </>)
    }

    if (props.intento === 2) {
        obj.push(<>
            <img src="images/ahorcado2.jpeg" alt="imagen2" />
            <Input
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
            />
            <Button>Envía</Button>
        </>)
    }

    if (props.intento === 3) {
        obj.push(<>
            <img src="images/ahorcado3.jpeg" alt="imagen3" />
            <Input
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
            />
            <Button>Envía</Button>
        </>)
    }

    if (props.intento === 4) {
        obj.push(<>
            <img src="images/ahorcado4.jpeg" alt="imagen4" />
            <Input
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
            />
            <Button>Envía</Button>
        </>)
    }

    if (props.intento === 5) {
        obj.push(<>
            <img src="images/ahorcado5.jpeg" alt="imagen5" />
            <Input
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
            />
            <Button>Envía</Button>
        </>)
    }

    if (props.intento === 6) {
        obj.push(<>
            <img src="images/ahorcado6.jpeg" alt="imagen6" />
            <Input
                type='text'
                placeholder='¡Introduce una letra y prueba!'
                maxLength="1"
            />
            <Button>Envía</Button>
        </>)
    }
    return (
        <>
            {obj}
        </>
    )
}