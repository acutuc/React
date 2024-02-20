import { Table, Button } from 'reactstrap';

const MapaPersonas = ({ poblacion, supermercados, setSupermercados }) => {
    
    const coordenadas = (x, y) => {
        //x -> fila
        //y -> columna
        console.log(x + " " + y)
        for(let i = 0; i < poblacion.length; i++){
            for(let j = 0; j < poblacion[i].length; j++){
                if(poblacion[i] === x && poblacion[i][j] === y){
                    console.log("si")
                }
            }
        }
        setSupermercados({ fila: x, columna: y })
    }
    
    return (
        <Table bordered>
            <tbody>
                {poblacion.map((valorE, indiceE) => {
                    return (<tr>{valorE.map((valorF, indiceF) => {
                        return (<td><Button style={{ width: 60 }} onClick={() => coordenadas(indiceE, indiceF)}>{valorF}</Button></td>)
                    })}</tr>)
                })}
            </tbody>
        </Table>
    )
}

export default MapaPersonas;