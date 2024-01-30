import { useState } from "react";
import { Button } from "reactstrap";
const Botonera = ({ tablero, mueveFicha }) => {
    const [pulsado, setPulsado] = useState({ fila: 0, columna: 0 })

    const handleClick = (x, y) => {
        //x -> fila
        //y -> columna
        setPulsado({ fila: x, columna: y })
        if (tablero[x - 1][y].color !== "success" && tablero[x - 1][y + 1].color !== "success" && tablero[x - 1][y - 1].color !== "success") {
            tablero[x - 1][y - 1].color = "primary";
            tablero[x - 1][y + 1].color = "primary";
            setPulsado({ fila: x, columna: y })
        }
        if (tablero[x][y].color === "primary") {
            tablero[x][y].color = "success";
            
            //Resetamos los colores azules:
            for(let i = 0; i < 8; i++){
                for(let j = 0; j < 8; j++){
                    if(tablero[i][j].color === "primary"){
                        tablero[i][j].color = "secondary";
                    }
                }
            }
        }
    }
    console.log(pulsado)

    let tabla = []

    for (let i = 0; i < tablero.length; i++) {
        let columna = []
        for (let j = 0; j < tablero.length; j++) {
            if (tablero[i][j].color !== "secondary") {
                columna.push(<Button color={tablero[i][j].color} outline={tablero[i][j].outline} onClick={() => handleClick(i, j)} />)
            } else {
                columna.push(<Button color={tablero[i][j].color} outline={tablero[i][j].outline} />)
            }
        }
        tabla.push(<>{columna}<br /></>)
    }

    return (
        tabla
    );
}

export default Botonera;