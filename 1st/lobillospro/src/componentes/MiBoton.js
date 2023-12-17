import { Button } from 'reactstrap';

const MiBoton = (props) => {
    //Los props son todas las propiedades que podemos modificar de un componente.
    //Aunque sólo pasemos uno por parámetro, si hacemos un console log podemos ver que 
    //  hay más.
    //console.log(props)
    return (
        //Aquí si le podemos pasar el contenido del botón.
        //ACORDARME DE LA MANO DE MORENO.
        <>
            <Button color={props.saes} onClick={() => props.onthefly()}>{props.pakito}</Button>
        </>
    )
}

export default MiBoton;