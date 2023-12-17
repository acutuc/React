import { Button } from "reactstrap";

const Campo = (props) => {
    let matriz = []
    for (let i = 0; i < 10; i++) {
        matriz.push([])
        for (let j = 0; j < 10; j++) {
            matriz[i].push(<Button size="lg">SI</Button>)
        }
    }

    let contador = 0;
    while (contador < props.minas) {
        let numeroGen1 = props.generaNumero(0, matriz.length - 1);
        let numeroGen2 = props.generaNumero(0, matriz[numeroGen1].length);

        //Controlamos que no se puedan infectar la casilla de inicio y la casilla de fin
        if ((numeroGen1 !== 0 && numeroGen2 !== 0) && (numeroGen1 !== matriz[matriz.length - 1] && numeroGen2 !== matriz[matriz.length - 1].length)) {

            matriz[numeroGen1][numeroGen2] = <Button size="lg">NO</Button>
            contador++;
        }

    }

    return (
        <>
            {matriz}
        </>
    );
}

export default Campo;