import { Button, Row, Col } from "reactstrap";

const Campo = (props) => {
    let matriz = []
    let contador = 0;
    for (let i = 0; i < 10; i++) {
        matriz.push([])
        for (let j = 0; j < 10; j++) {
            //Metemos una mina por cada fila:
            while (contador < props.minas) {
                if (j === props.generaNumero()) {
                    matriz[i].push(<Button size="lg">NO</Button>)
                    contador++;
                } else {
                    matriz[i].push(<Button size="lg">SI</Button>)
                }
            }


        }
    }
    return (
        <>
            {matriz}
        </>
    );
}

export default Campo;