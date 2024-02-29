import { Table, Button } from 'reactstrap';

const MapaPersonas = ({ poblacion, supermercados, setSupermercado }) => {

    const coordenadas = (x, y) => {
        //x -> fila
        //y -> columna
        
        for (let i = 0; i < poblacion.length; i++) {
            for (let j = 0; j < poblacion[i].length; j++) {
                if (i === x && j === y) {
                    setSupermercado(x, y)
                }
            }
        }
    }

    return (
        <Table bordered>
            <tbody>
                {poblacion.map((valorE, indiceE) => {
                    return (<tr>{valorE.map((valorF, indiceF) => {
                        return (<td><Button style={{ width: 60 }} onClick={() => coordenadas(indiceE, indiceF)} color={supermercados[indiceE][indiceF].color}>{valorF}</Button></td>)
                    })}</tr>)
                })}
            </tbody>
        </Table>
    )
}

export default MapaPersonas;