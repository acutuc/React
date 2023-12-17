import {Button} from 'reactstrap';

const Deseos = (props) => {

    let arr = []
    props.contenido.map((e,i) => {
        arr.push(<li key={i}>{e} <Button onClick={()=> props.borrar(e)}>Borrar {e}</Button></li>)
    })

    return(
        <ul>
            {arr}
        </ul>
    );
}

export default Deseos;